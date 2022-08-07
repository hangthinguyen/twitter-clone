import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import profilePic from '../../assets/profile-pic.jpeg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './AccountButton.css';

export default function AccountButton() {
  const [isDropdownOpen, setdropdown] = useState(true);

  function handleOnClick() {
    setdropdown(!isDropdownOpen);
  }
  return (
    <div>
      <button className="profile-btn" onClick={handleOnClick}>
        <img src={profilePic} className="profile-pic" alt="profile" />
        <div className="username-container">
          <p className="username">Hang Nguyen</p>
          <p className="nickname">@Hnguyen</p>
        </div>
        <FontAwesomeIcon icon={faEllipsis} className="profile-icon" />
      </button>
      <DropdownMenu isDropdownOpen={isDropdownOpen} />
    </div>
  );
}
