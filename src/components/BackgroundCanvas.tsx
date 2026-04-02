import React, { useRef, useEffect } from 'react';

const getSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
};

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const season = getSeason();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor(season: string) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = 2 + Math.random() * 5;
        this.speedX = -0.3 - Math.random() * 1;
        this.speedY = 0.2 + Math.random() * 0.6;
        switch(season) {
          case 'spring': this.color = `hsla(340, 80%, 70%, 0.7)`; break;
          case 'summer': this.color = `hsla(50, 90%, 60%, 0.7)`; break;
          case 'autumn': this.color = `hsla(20, 80%, 60%, 0.7)`; break;
          default: this.color = `hsla(200, 80%, 80%, 0.7)`; break;
        }
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < -20) this.x = width + 20;
        if (this.y > height + 20) this.y = -20;
        if (this.y < -20) this.y = height + 20;
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        // Draw a small pixel square
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle(season));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.update();
        p.draw(ctx);
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reinitialize particles
      particles.length = 0;
      for (let i = 0; i < 60; i++) particles.push(new Particle(season));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [season]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BackgroundCanvas;