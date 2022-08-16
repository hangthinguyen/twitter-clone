import './LiveBar.css';

export default function LiveBar() {
  return (
    <div className="live-bar-container">
      <span className="live-bar-header">What&rsquo;s Happening</span>
      <div className="rows">
        <div>
          <div className="live-row">
            <span className="live-title">
              US Election
            </span>
            <div className="devider-dot" />
            LIVE
          </div>
          <div className="live-bar-text">
            Voters cast ballots in primary elections in two states on August 16
          </div>
          <div className="trending">
            Trending with
            <a href="https://twitter.com/search?q=%22Liz%20Cheney%22&src=trend_click&vertical=trends">Liz Chaney</a>
            ,
            <a href="https://twitter.com/search?q=Wyoming&src=trend_click&vertical=trends">Wyoming</a>
          </div>
        </div>
        <img src="https://pbs.twimg.com/semantic_core_img/1557077012061114368/iQcXagbx?format=jpg&name=360x360" alt="election-pic" className="election-pic" />
      </div>
    </div>
  );
}
