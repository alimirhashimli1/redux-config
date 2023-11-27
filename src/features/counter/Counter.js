import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)
    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }
  return (
    <section>
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={resetAll}>Reset</button>
        </div>
        <div>
            <input type="number" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment</button>
        </div>
    </section>
  )
}

export default Counter