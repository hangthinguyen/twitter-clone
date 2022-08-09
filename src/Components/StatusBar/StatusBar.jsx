import {
  faCalendarCheck, faComment, faFaceSmile, faHeart, faImage,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faBars, faEarthAmerica, faEllipsis, faGift, faLocationDot, faPlus, faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useCallback } from 'react';
import ReactTooltip from 'react-tooltip';
import { CircularProgressbar } from 'react-circular-progressbar';
import profilePic from '../../assets/profile-pic.jpeg';
import samplePic from '../../assets/samplepic.jpg';
import InputBar from '../InputBar/InputBar';

import 'react-circular-progressbar/dist/styles.css';
import './StatusBar.css';

export default function StatusBar({
  items, setItems, isShown, onMouseDown,
}) {
  const [circlarBarColorChange, setCircularBarColorChange] = useState('rgb(29, 155, 240)');

  const [letterCounter, setLetterCounter] = useState('');

  const [counterColor, setCounterColor] = useState('');

  const [userInput, setInput] = useState('');

  const [percentChange, setPercentageChange] = useState(0);

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
      {tooltip
        && <ReactTooltip effect="solid" place="bottom" className="tool-tip" delayShow={1000} delayUpdate={1000} />}

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

  const handleChange = useCallback((e) => {
    e.preventDefault();

    const inputValue = e.target.value;
    const inputLength = inputValue.length;
    const valuePercentage = (inputLength / 280) * 100;

    if (inputLength > 290) {
      const counterOver280Char = 290 - inputLength;
      setLetterCounter(counterOver280Char);
      setCircularBarColorChange('white');
    } else if (inputLength >= 280) {
      setCircularBarColorChange('red');
      const counterOver280Char = 280 - inputLength;
      setLetterCounter(counterOver280Char);
      setCounterColor('red');
    } else if (inputLength >= 260) {
      setCircularBarColorChange('#FFCC00');
      const counter = 280 - inputLength;
      setLetterCounter(counter);
      setCounterColor('#FFCC00');
    } else {
      setCircularBarColorChange('rgb(29, 155, 240)');
      setLetterCounter('');
    }

    setPercentageChange(valuePercentage);
    setInput(inputValue);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        avatar: <img
          src={samplePic}
          alt="avatar-pic"
          style={{
            width: 48,
            height: 48,
            borderRadius: 99999,
          }}
        />,
        name: userInput,
        id: Math.random() * 1000,
        username: 'Vinh Vu',
        nickname: '@VinhVu',
        time: '7h',
        moreIcon: <FontAwesomeIcon icon={faEllipsis} />,
        commentIcon: <FontAwesomeIcon icon={faComment} />,
        commentNumber: '10',
        retweetIcon: <FontAwesomeIcon icon={faRetweet} />,
        retweetNumber: '101',
        likeIcon: <FontAwesomeIcon icon={faHeart} />,
        likeNumber: '203',
        shareIcon: <FontAwesomeIcon icon={faArrowUpFromBracket} />,
      },
    ]);
    setInput('');
    setPercentageChange('');
  }, [items, setItems, userInput]);

  return (
    <div>
      <div className="status-container">
        <img src={profilePic} className="status-pic" alt="profile" />

        <div className="status-input-container">
          <button onMouseDown={onMouseDown} className="input-field">
            <InputBar userInput={userInput} onChange={handleChange} />
          </button>

          <div
            className="status-privacy-setting-container"
            style={{
              display: isShown ? 'block' : 'none',
            }}
          >
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
                <CircularProgressbar
                  value={percentChange}
                  styles={{
                    path: {
                      stroke: circlarBarColorChange,
                    },
                    text: {
                      fontSize: '55px',
                      textAlign: 'center',
                      fill: counterColor,
                    },
                  }}
                  text={String(letterCounter)}
                  className="circular-progress-circle"
                />
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

              <button type="submit" className="status-tweet-btn" onClick={handleSubmit}>Tweet</button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
