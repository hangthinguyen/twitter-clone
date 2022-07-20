import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Logo.css';

export default function Logo() {
    return (
        <div className='logo'>
            <FontAwesomeIcon icon={faTwitter} className='twitter-icon'/>
        </div>
    )
}