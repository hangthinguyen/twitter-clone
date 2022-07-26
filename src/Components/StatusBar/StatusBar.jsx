import { faCalendarCheck, faFaceSmile, faImage } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEarthAmerica, faGift, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../../assets/profile-pic.jpeg';
import './StatusBar.css';

export default function StatusBar() {
    return (
        <div className='status-container'>
            <img src={profilePic} className='status-pic' alt='profile'></img>
            <div className='status-input-container'>
                <input type="text" placeholder="What's happening?" className='status-input'/>
                <section className='status-privacy-setting'>
                    <FontAwesomeIcon icon={faEarthAmerica} className='earth-icon'/>
                    <p>Everyone can reply</p>
                </section>
                <section className='icon-bar'>
                    <FontAwesomeIcon icon={faImage} />
                    <FontAwesomeIcon icon={faGift} />
                    <FontAwesomeIcon icon={faBars} />
                    <FontAwesomeIcon icon={faFaceSmile} />
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <FontAwesomeIcon icon={faLocationDot} />
                </section>
            </div>
        </div>
    )
}