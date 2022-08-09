import {
  faArrowUpFromBracket, faEllipsis, faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Tweet.css';

export default function Tweet({
  name, avatar, username, nickname, time,
  commentNumber, retweetNumber, likeNumber,
}) {
  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <div className="image-username-container">

          <div className="avatar">
            {avatar}
          </div>

          <div className="username-nickname-container">
            <div className="tweet-username">
              {username}
            </div>
            <div className="nickname-time-container">
              {nickname}
              <div className="nickname-time-devider" />
              {time}
            </div>
          </div>

        </div>
        <div className="more-icon">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>

      <div>
        {name}
      </div>

      <div className="tweet-icon-bar">

        <div className="comment-icon-container">
          <div className="comment-icon">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="icon-bar-numbers">
            {commentNumber}
          </div>
        </div>

        <div className="retweet-icon-container">
          <div className="retweet-icon">
            <FontAwesomeIcon icon={faRetweet} />
          </div>
          <div className="icon-bar-numbers">
            {retweetNumber}
          </div>
        </div>

        <div className="like-icon-container">
          <div className="like-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="icon-bar-numbers">
            {likeNumber}
          </div>
        </div>

        <div className="share-icon">
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </div>
      </div>
    </div>
  );
}
