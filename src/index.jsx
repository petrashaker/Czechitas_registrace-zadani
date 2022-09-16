import React from 'react';
import { createRoot } from 'react-dom/client';
import Registration from './components/Registration';
import './style.css';

const App = () => {
  return (
    <Registration />
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
