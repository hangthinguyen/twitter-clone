import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import StatusBar from '../StatusBar/StatusBar';
import './Popup.css';

export default function Popup({
  isPopup, onClick, items, setItems,
}) {
  return (

    <div
      className="popup-container"
      style={{
        display: isPopup ? 'block' : 'none',
      }}
    >
      {isPopup
        ? (
          <div className="popup-bar">
            <div className="popup-header">
              <button
                className="x-icon-container"
                onClick={onClick}
                aria-label="Mute volume"
              >
                <FontAwesomeIcon icon={faXmark} className="x-icon" />
              </button>
              <span className="unsent-tweet-btn">Unsent Tweets</span>
            </div>
            <StatusBar items={items} setItems={setItems} />
          </div>
        ) : null}
    </div>

  );
}
