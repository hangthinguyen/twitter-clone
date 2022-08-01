import { faCalendarCheck, faFaceSmile, faImage } from '@fortawesome/free-regular-svg-icons';
import {
  faBars, faEarthAmerica, faGift, faLocationDot, faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profilePic from '../../assets/profile-pic.jpeg';
import './StatusBar.css';
import InputBar from '../InputBar/InputBar';

export default function StatusBar({ onChange }) {
  const [tooltip, setTooltip] = useState(true);
  const [statusIcons] = useState([
    {
      id: 1,
      iconS: faImage,
      toolTip: 'Media',
    },
    {
      id: 2,
      iconS: faGift,
      toolTip: 'GIF',
    },
    {
      id: 3,
      iconS: faBars,
      toolTip: 'Poll',
    },
    {
      id: 4,
      iconS: faFaceSmile,
      toolTip: 'Emoji',
    },
    {
      id: 5,
      iconS: faCalendarCheck,
      toolTip: 'Schedule',
    },
  ]);

  const statusTooltipBar = statusIcons.map((statusIcon) => (
    <div key={statusIcon.id}>
      {tooltip && <ReactTooltip effect="solid" place="bottom" className="tool-tip" delayShow={1000} delayUpdate={1000} />}
      <FontAwesomeIcon
        data-tip={statusIcon.toolTip}
        key={statusIcon.id}
        icon={statusIcon.iconS}
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => {
          setTooltip(false);
          setTimeout(() => setTooltip(true), 5);
        }}
      />
    </div>
  ));
  const percentage = { onChange };
  return (
    <div className="status-container">
      <img src={profilePic} className="status-pic" alt="profile" />
      <div className="status-input-container">
        <InputBar />
        <div className="status-privacy-setting-container">
          <section className="status-privacy-setting">
            <FontAwesomeIcon icon={faEarthAmerica} className="earth-icon" />
            <p>Everyone can reply</p>
          </section>
        </div>
        <section className="icon-tweet-btn-container">
          <div className="icons-bar">
            {statusTooltipBar}
            <FontAwesomeIcon icon={faLocationDot} className="icon-location" />
          </div>
          <div className="tweet-btn-container">
            <div className="circular-bar">
              <CircularProgressbar value={percentage} className="circular-progress-circle" />
            </div>
            <hr className="verticle-line" />
            <div
              className="circle-plus"
              data-tip="Add"
              onMouseLeave={() => {
                setTooltip(false);
                setTimeout(() => setTooltip(true), 5);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <button className="status-tweet-btn">Tweet</button>
          </div>
        </section>
      </div>
    </div>
  );
}
