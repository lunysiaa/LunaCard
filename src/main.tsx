import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const month = new Date().getMonth();
let season = 'winter';
if (month >= 2 && month <= 4) season = 'spring';
else if (month >= 5 && month <= 7) season = 'summer';
else if (month >= 8 && month <= 10) season = 'autumn';
document.body.classList.add(season);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);