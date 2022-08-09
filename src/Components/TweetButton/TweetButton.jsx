import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TweetButton.css';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

export default function TweetButton({ onClick }) {
  return (
    <div>
      <button className="mobile-tweet-btn" onClick={onClick} aria-label="Mute volume"><FontAwesomeIcon icon={faFeather} /></button>
      <button className="desktop-tweet-btn" onClick={onClick}><span className="tweet-text">Tweet</span></button>
    </div>
  );
}
