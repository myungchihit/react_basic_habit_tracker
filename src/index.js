import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 18버전 react라서 ReactDOM.render 지원안함.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <SimpleHabit />
//   </React.StrictMode>
// );
