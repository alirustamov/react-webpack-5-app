import React, { FC } from 'react';
import { Counter } from '../../features/counter/Counter';

export const Main: FC = () => {
  return (
    <div>
      <h1>Hello!</h1> This is the main page
      <div className="App">
        <header className="App-header">
          <img src={`${''}/logo.svg`} className="App-logo" alt="logo" />
          <Counter />
          <div />
        </header>
      </div>
    </div>
  );
};
