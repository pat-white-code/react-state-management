import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    console.log(localStorage, storage);
    if (storage) return JSON.parse(storage).value;
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

const useLocalStorage = (initialValue, key) => {

  const get = () => {
    const storage = localStorage.getItem(key);
    // console.log(storage);
    if (storage) return JSON.parse(storage)[value];
    return initialValue;
  };

  const [value, setValue] = useState(get());

  useEffect(()=>{
    console.log('key', key)
    console.log('value', value)
    localStorage.setItem(key, JSON.stringify({value}))
  }, [value])

  return [value, setValue]
}

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) return JSON.parse(storage).count;
  return 0;
};

const storeStateInLocalStorage = count => {
  localStorage.setItem('counterState', JSON.stringify({count}));
  console.log(localStorage);
};

const Counter = ({step = 5, max = 15}) => {
  // const [count, setCount] = useState(getStateFromLocalStorage());
  const [count, setCount] = useLocalStorage(0, 'counterState');

  useEffect(()=>{
    storeStateInLocalStorage(count)
  }, [count])

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
