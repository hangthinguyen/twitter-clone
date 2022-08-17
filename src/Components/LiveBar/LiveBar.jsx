import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import './LiveBar.css';

export default function LiveBar() {
  return (
    <div className="live-bar-container">

      <span className="live-bar-header">What&rsquo;s Happening</span>

      <a href="https://twitter.com/i/events/1557074199293730820" className="rows">
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
            Trending with&nbsp;
            <div>Liz Chaney</div>
            ,&nbsp;
            <div>Wyoming</div>
          </div>
        </div>
        <img src="https://pbs.twimg.com/semantic_core_img/1557077012061114368/iQcXagbx?format=jpg&name=360x360" alt="election-pic" className="election-pic" />
      </a>

      <a href="https://twitter.com/search?q=%23DONUTSHOPxSNICKERS&src=promoted_trend_click&vertical=trends" className="rows">

        <div className="live-row-2">
          <div className="title-img-container">
            <div className="row-2-title">
              DONUTSHOPxSNICKERS
            </div>
            <img src="https://pbs.twimg.com/profile_images/1405580027757010956/kV1vtA0f_400x400.jpg" alt="donut" className="donut" />
          </div>
          <div className="row-2-text">
            The Original Donut Shop Coffee® and SNICKERS™ collide
          </div>
          <div className="row-2-text-2">
            <FontAwesomeIcon icon={faSquareArrowUpRight} className="arrow-up-right-icon" />
            Promoted by The Original Donut Shop Coffee
          </div>
        </div>

      </a>

      <a href="https://twitter.com/search?q=chaeyoung&src=trend_click&pt=1559555623745859584&vertical=trends" className="rows">

        <div>
          <div className="live-row">
            <span className="live-title">
              Music
            </span>
            <div className="devider-dot" />
            Trending
          </div>
          <div className="live-bar-text">Kim Taehuyng</div>
          <div className="trending">41.6K Tweets</div>
        </div>
        <div className="more-icon">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>

      </a>

      <a href="https://twitter.com/search?q=%22Jung%20Kook%22&src=trend_click&vertical=trends" className="rows">

        <div>
          <div className="live-row">
            <span className="live-title">
              Korean Music
            </span>
            <div className="devider-dot" />
            Trending
          </div>
          <div className="live-bar-text">Jungkook</div>
          <div className="trending">105K Tweets</div>
        </div>
        <div className="more-icon">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>

      </a>

      <a href="https://twitter.com/i/events/1334530931114221571" className="rows">

        <div>
          <div className="live-row">
            <span className="live-title">
              COVID-19
            </span>
            <div className="devider-dot" />
            LIVE
          </div>
          <div className="live-bar-text">COVID-19: News and updates for California</div>
        </div>
        <img src="https://pbs.twimg.com/semantic_core_img/1338525361693368320/g6ZLOAcn?format=jpg&name=360x360" alt="election-pic" className="covid-19-pic" />

      </a>

      <a href="https://twitter.com/explore/tabs/for-you" className="last-row-text">

        <div>Show more</div>

      </a>

    </div>
  );
}
