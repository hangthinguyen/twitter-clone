import './Tweet.css';

export default function Tweet({
  name, avatar, username, nickname, time,
  moreIcon, commentIcon, retweetIcon, likeIcon,
  shareIcon, commentNumber, retweetNumber, likeNumber,
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
              <div className="nickname-time-devider">·</div>
              {time}
            </div>
          </div>

        </div>
        <div className="more-icon">
          {moreIcon}
        </div>
      </div>

      <div>
        {name}
      </div>

      <div className="tweet-icon-bar">

        <div className="comment-icon-container">
          <div className="comment-icon">
            {commentIcon}
          </div>
          <div className="icon-bar-numbers">
            {commentNumber}
          </div>
        </div>

        <div className="retweet-icon-container">
          <div className="retweet-icon">
            {retweetIcon}
          </div>
          <div className="icon-bar-numbers">
            {retweetNumber}
          </div>
        </div>

        <div className="like-icon-container">
          <div className="like-icon">
            {likeIcon}
          </div>
          <div className="icon-bar-numbers">
            {likeNumber}
          </div>
        </div>

        <div className="share-icon">
          {shareIcon}
        </div>
      </div>
    </div>
  );
}
