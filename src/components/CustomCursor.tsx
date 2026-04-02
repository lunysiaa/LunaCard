import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
};

export default CustomCursor;