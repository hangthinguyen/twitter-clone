import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../../assets/profile-pic.jpeg';
import './DropdownMenu.css';

export default function DropdownMenu({ isDropdownOpen }) {
  return (
    <div
      className="dropdown"
      style={{
        display: !isDropdownOpen ? 'block' : 'none',
      }}
    >
      <div className="dropdown-header">
        <div className="image-username">
          <img src={profilePic} className="dropdown-pic" alt="profile" />
          <div className="username-container">
            <p className="username1">Hang Nguyen</p>
            <p className="nickname1">@Hnguyen</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faCheck} className="check-icon" />
      </div>
      <section className="dropdown-option-1">
        <a href="https://twitter.com/i/flow/login">Add an existing account</a>
      </section>
      <section className="dropdown-option-2">
        <a href="https://twitter.com/logout">Log out as @Hnguyen</a>
      </section>
      <FontAwesomeIcon icon={faCaretDown} className="arrow" />
    </div>
  );
}
