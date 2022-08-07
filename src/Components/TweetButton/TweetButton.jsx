import './TweetButton.css';

export default function TweetButton({ onClick }) {
  return (
    <div>
      <button className="tweet-btn" onClick={onClick}>Tweet</button>
    </div>
  );
}
