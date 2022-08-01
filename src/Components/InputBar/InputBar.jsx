import { useState } from 'react';
import './InputBar.css';

export default function InputBar() {
  const [userInput, setInput] = useState('');
  function handleChange(e) {
    console.log('hello');
    setInput(e.target.value);
    // const inputValueLength = inputValue.length();
    // const percentage = (inputValueLength / 280) * 100;
    // if (percentage > 100) {
    //   console.log(percentage);
    // }
  }
  return (
    <form className="input-container">
      <input type="text" placeholder="What's happening?" className="status-input" value={userInput} onChange={handleChange} />
    </form>
  );
}
