import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import StatusBar from '../StatusBar/StatusBar';
import Tweet from '../Tweet/Tweet';
import './Feed.css';

export default function Feed({
  items, setItems,
}) {
  const [isShown, setShown] = useState(false);

  const TweetList = items ? items.map(
    (item) => (
      <Tweet
        key={item.id}
        name={item.name}
        avatar={item.avatar}
        username={item.username}
        nickname={item.nickname}
        time={item.time}
        moreIcon={item.moreIcon}
        commentIcon={item.commentIcon}
        commentNumber={item.commentNumber}
        retweetIcon={item.retweetIcon}
        retweetNumber={item.retweetNumber}
        likeIcon={item.likeIcon}
        likeNumber={item.likeNumber}
        shareIcon={item.shareIcon}
      />
    ),
  ) : null;

  const handleIconsShown = useCallback(() => {
    setShown(true);
  }, []);

  return (
    <div className="feed">
      <header className="feed-header">
        <a href="https://twitter.com/home" className="home-btn">Home</a>
        <div className="star-icon-container"><FontAwesomeIcon icon={faStar} className="star-icon" /></div>
      </header>
      <StatusBar
        items={items}
        setItems={setItems}
        isShown={isShown}
        onMouseDown={handleIconsShown}
      />
      {TweetList}
    </div>
  );
}
