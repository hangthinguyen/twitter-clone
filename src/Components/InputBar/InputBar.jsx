import './InputBar.css';

export default function InputBar({ onChange, userInput }) {
  return (
    <form className="input-container">
      <input type="text" placeholder="What's happening?" className="status-input" value={userInput} onChange={onChange} />
    </form>
  );
}
