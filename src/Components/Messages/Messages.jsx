/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Messages.css';

export default function Messages({
  mTime, mUsername, mMessage, mNickname, ImgS,
  onMouseOver, isHover, todoid,
}) {
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="message-pic-icon-container"
      onMouseOver={onMouseOver}
      todoid={todoid}
    >

      <div className="message-pic-container">

        <div className="avatar">
          <img src={ImgS} alt="pic" className="m-pic" />
        </div>

        <div className="message-container">

          <div className="m-username-nickname-container">
            <div className="m-username">
              {mUsername}
            </div>
            <div className="m-nickname-time-container">
              {mNickname}
              <div className="devider-dot" />
              {mTime}
            </div>
          </div>

          <div>
            {mMessage}
          </div>
        </div>
      </div>

      <div
        className="more-icon"
        style={{
          display: !isHover ? 'flex' : 'none',
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </div>

    </div>
  );
}
