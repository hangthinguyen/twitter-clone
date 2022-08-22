import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './MessageBar.css';

export default function MessageBar() {
  return (
    <div className="message-bar">

      <div className="messages">Messages</div>

      <div className="message-icons-container">

        <div className="message-icon">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
        </div>
        <div className="message-icon">
          <FontAwesomeIcon icon={faAnglesUp} />
        </div>

      </div>
    </div>
  );
}
