import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <p>
          <Link to="/">Main page</Link>
        </p>
        <p>
          <Link to="/about">About page</Link>
        </p>
        <p>
          <Link to="/contact">Contact page</Link>
        </p>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
