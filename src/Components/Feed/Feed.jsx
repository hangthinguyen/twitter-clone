import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StatusBar from '../StatusBar/StatusBar';
import './Feed.css';

export default function Feed() {
  return (
    <div className="feed">
      <header className="feed-header">
        <a href="https://twitter.com/home" className="home-btn">Home</a>
        <div className="star-icon-container"><FontAwesomeIcon icon={faStar} className="star-icon" /></div>
      </header>
      <StatusBar />
    </div>
  );
}
