import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './features/counterApp/CounterSlice';
import { useState } from 'react';


function App() {

  const [amount, setAmount] = useState(0);

  const count = useSelector( (state) => state.counter.value);

  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleIncrementAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="counter-container">
  <h1 className="title">React Redux Counter</h1>

  <div className="counter-box">
    <button className="btn increment" onClick={handleIncrementClick}> + </button>
    <p className="count">Count: {count}</p>
    <button className="btn decrement" onClick={handleDecrementClick}> - </button>
  </div>

  <button className="btn reset" onClick={handleResetClick}> Reset </button>

  <div className="input-box">
    <input 
      type="number"
      value={amount}
      placeholder="Enter Amount"
      onChange={(e) => setAmount(Number(e.target.value))}
    />
    <button className="btn amount" onClick={handleIncrementAmountClick}>
      Increment Amount
    </button>
  </div>
</div>
  )
}

export default App
