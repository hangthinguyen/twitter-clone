import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../assets/profile-pic.jpeg';
import './DropdownMenu.css';

export default function DropdownMenu({isDropdownOpen}) {
    
    return (
        <div 
        style={{
            visibility: !isDropdownOpen ? 'visible' : 'hidden'
        }}>
            <div className='dropdown-header'>
                <img src={profilePic} className='profile-pic' alt='profile'></img>
                    <div className='username-container'>
                        <p className='username'>Hang Nguyen</p>
                        <p className='nickname'>@Hnguyen</p>
                    </div>
                    <FontAwesomeIcon icon={faCheck} className='profile-icon'/>
            </div>
            <section>
                <a href="https://twitter.com/i/flow/login">Add an existing account</a>
            </section>
            <section>
                <a href="https://twitter.com/logout">Log out as @Hnguyen</a>
            </section>
        </div>
    )
}