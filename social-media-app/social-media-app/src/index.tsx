import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Assuming you have a CSS file for global styles

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
      {/* your routes/components here */}
    </div>
  </React.StrictMode>
);