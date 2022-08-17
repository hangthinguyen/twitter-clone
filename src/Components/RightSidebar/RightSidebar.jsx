import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar/SearchBar';
import LiveBar from '../LiveBar/LiveBar';
import MessageBar from '../MessageBar/MessageBar';
import './RightSidebar.css';
import FollowBar from '../FollowBar/FollowBar';

export default function RightSidebar() {
  const [isShownSearchPopUp, setShownSearchPopup] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [isInputValueMoreThan0, setInputLengthSearchBar] = useState(0);

  const handleSearchBarPopUp = useCallback(() => {
    setShownSearchPopup(!isShownSearchPopUp);
  }, [isShownSearchPopUp]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    const InputValueSearchBar = e.target.value;
    const InputValueSearchLength = InputValueSearchBar.length;
    setSearchInput(InputValueSearchBar);
    setInputLengthSearchBar(InputValueSearchLength);
  }, []);

  const handleInputDelete = useCallback(() => {
    setSearchInput('');
  }, []);

  return (
    <div
      className="right-side-bar-container"
    >
      <div className="search-live-follow-bar">

        <SearchBar
          searchInput={searchInput}
          onChange={handleSearch}
          isShownSearchPopUp={isShownSearchPopUp}
          onClick={handleSearchBarPopUp}
          isInputValueMoreThan0={isInputValueMoreThan0}
          onDelete={handleInputDelete}
        />

        <LiveBar />

        <FollowBar />

        <div className="footer-container">
          <a href="https://twitter.com/en/tos" className="footer">Terms of Service</a>
          <a href="https://twitter.com/en/privacy" className="footer">Privacy Policy</a>
          <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" className="footer">Cookie Policy</a>
          <a href="https://help.twitter.com/en/resources/accessibility" className="footer">Accessibility</a>
          <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo" className="footer">Adds Info</a>
          <a href="https://twitter.com/Coinsquare" className="footer">More</a>
          <FontAwesomeIcon icon={faEllipsis} className="footer-icon" />
          <div className="copy-right">&copy; 2022 Twitter, Inc.</div>
        </div>

        <MessageBar />
      </div>
    </div>
  );
}
