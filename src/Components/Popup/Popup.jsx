import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import StatusBar from '../StatusBar/StatusBar';
import './Popup.css';

export default function Popup({ isPopup }) {
  return (
    <div
      className="popup-container"
    >

      <div>
        {isPopup
          ? (
            <div className="popup-bar">
              <div>
                <FontAwesomeIcon icon={faXmark} />
                <span>Unsent Tweets</span>
              </div>
              <StatusBar />
            </div>
          ) : null}
      </div>
    </div>
  );
}
