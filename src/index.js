import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const Counter = ({step = 5, max = 15}) => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(c => {
      if(count >= max) return c
      return c + step;
    })
  }
  
  const dec = () => {
    setCount(c => c - step)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
}

render(<Counter />, document.getElementById('root'));
