import { useCallback, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LiveBar from '../LiveBar/LiveBar';
import './RightSidebar.css';

export default function RightSidebar() {
  const [isShownSearchPopUp, setShownSearchPopup] = useState(true);
  const [searchInput, setSearchInput] = useState([]);

  const handleSearchBarPopUp = useCallback(() => {
    setShownSearchPopup(!isShownSearchPopUp);
  }, [isShownSearchPopUp]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
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
        />
        <LiveBar />
      </div>
    </div>
  );
}
