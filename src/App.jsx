import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Components/counterSlice';

const App = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
      <div className='counter'>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <div className='counter-container'>
          <button style={{ alignSelf: 'flex-start' }} onClick={() => dispatch(decrement())}>-</button>
          <button style={{ alignSelf: 'flex-end' }} onClick={() => dispatch(increment())}>+</button>
        </div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    );
}

export default App;
