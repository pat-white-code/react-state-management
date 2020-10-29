import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
};

const storeStateInLocalStorage = count => {
  localStorage.setItem('counterState', JSON.stringify({ count }));
  console.log(localStorage);
};

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

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'count');

  const increment = () => {
    setCount(c => {
      if (c >= max) return c;
      return c + step;
    });
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    // Click "open in a new window" to see the title change
    document.title = `Counter: ${count}`;
  }, [count]);

  useEffect(() => {
    storeStateInLocalStorage(count);
  }, [count]);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

// export default Counter;


// import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';

// import './styles.scss';

// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);
//     console.log(localStorage, storage);
//     if (storage) return JSON.parse(storage).value;
//     return initialState;
//   };

//   const [value, setValue] = useState(get());

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify({ value }));
//   }, [value]);

//   return [value, setValue];
// };

// // const useLocalStorage = (initialValue, key) => {

// //   const get = () => {
// //     const storage = localStorage.getItem(key);
// //     // console.log(storage);
// //     if (storage) return JSON.parse(storage)[value];
// //     return initialValue;
// //   };

// //   const [value, setValue] = useState(get());

// //   useEffect(()=>{
// //     console.log('key', key)
// //     console.log('value', value)
// //     localStorage.setItem(key, JSON.stringify({value}))
// //   }, [value])

// //   return [value, setValue]
// // }

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   console.log(storage);
//   if (storage) return JSON.parse(storage).count;
//   return 0;
// };

// const storeStateInLocalStorage = count => {
//   localStorage.setItem('counterState', JSON.stringify({count}));
//   console.log(localStorage);
// };

// const Counter = ({step = 5, max = 15}) => {
//   // const [count, setCount] = useState(getStateFromLocalStorage());
//   const [count, setCount] = useLocalStorage(0, 'counterState');

//   useEffect(()=>{
//     storeStateInLocalStorage(count)
//   }, [count])

//   const inc = () => {
//     setCount(c => {
//       if(count >= max) return c
//       return c + step;
//     })
//   }
  
//   const dec = () => {
//     setCount(c => c - step)
//   }

//   const reset = () => {
//     setCount(0)
//   }

//   return (
//     <main className="Counter">
//       <p className="count">{count}</p>
//       <section className="controls">
//         <button onClick={inc}>Increment</button>
//         <button onClick={dec}>Decrement</button>
//         <button onClick={reset}>Reset</button>
//       </section>
//     </main>
//   );
// }

render(<Counter />, document.getElementById('root'));
