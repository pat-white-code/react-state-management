import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const Counter = () => {
  return (
    <main className="Counter">
      <p className="count">0</p>
      <section className="controls">
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </section>
    </main>
  );
}

render(<Counter />, document.getElementById('root'));
