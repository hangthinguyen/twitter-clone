import './FollowBar.css';

export default function FollowBar() {
  return (
    <div className="live-bar-container">

      <span className="live-bar-header">Who To Follow</span>

      <a href="https://twitter.com/Chain" className="rows">
        <div className="image-username-container">

          <div className="avatar">
            <img src="https://pbs.twimg.com/profile_images/1331039377804312577/nSth4c3t_400x400.jpg" alt="avatar-pic" />
          </div>
          <div className="username-nickname-container">
            <div className="tweet-username">
              Chain
            </div>
            <div className="nickname-time-container">
              @Chain
            </div>
          </div>
        </div>

        <button className="follow-btn">Follow</button>
      </a>

      <a href="https://twitter.com/KineProtocol" className="rows">
        <div className="image-username-container">

          <div className="avatar">
            <img src="https://pbs.twimg.com/profile_images/1553969502668603392/lM4_-iUp_400x400.png" alt="avatar-pic" />
          </div>
          <div className="username-nickname-container">
            <div className="tweet-username">
              Kine Protocols
            </div>
            <div className="nickname-time-container">
              @KineProtocols
            </div>
          </div>
        </div>

        <button className="follow-btn">Follow</button>
      </a>

      <a href="https://twitter.com/Coinsquare" className="rows">
        <div className="image-username-container">

          <div className="avatar">
            <img src="https://pbs.twimg.com/profile_images/1529195029012660224/8DGGq7GI_400x400.jpg" alt="avatar-pic" />
          </div>
          <div className="username-nickname-container">
            <div className="tweet-username">
              Coinsquares
            </div>
            <div className="nickname-time-container">
              @Coinsquares
            </div>
          </div>
        </div>

        <button className="follow-btn">Follow</button>
      </a>

      <a href="https://twitter.com/Coinsquare" className="last-row-text">

        <div>Show more</div>

      </a>

    </div>
  );
}
