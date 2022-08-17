import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './MessageBar.css';

export default function MessageBar() {
  return (
    <div className="message-bar">
      <div>Message</div>
      <div>
        <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
        <FontAwesomeIcon icon={faAnglesUp} />
      </div>
    </div>
  );
}
