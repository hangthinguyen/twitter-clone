import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PrivacySetting.css';

export default function PrivacySetting() {
  return (
    <div className="status-privacy-setting-container">
      <section className="status-privacy-setting">
        <FontAwesomeIcon icon={faEarthAmerica} className="earth-icon" />
        <p>Everyone can reply</p>
      </section>
    </div>
  );
}
