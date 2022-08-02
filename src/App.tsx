import { Header } from './components/Header';
import { Article } from './components/Article';
import React, { useCallback, useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    setCount((old) => old + 1);
  }, []);

  return <div>
    <Header>Header</Header>
    <Article>Article</Article>
    <Article>{count}</Article>
    <button onClick={handleClick}>+</button>
  </div>;
};

export default App;