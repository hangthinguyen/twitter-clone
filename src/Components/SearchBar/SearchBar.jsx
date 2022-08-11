import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import SearchBarPopUp from '../SearchBarPopUp/SearchBarPopUp';
import './SearchBar.css';

export default function SearchBar({
  searchInput, onChange,
}) {
  const [isShownSearchPopUp, setShownSearchPopup] = useState(false);
  const [isBorderColorred, setBorderColor] = useState('#EFF3F4');

  const handleSearchBarPopUp = useCallback(() => {
    setShownSearchPopup(!isShownSearchPopUp);
  }, [isShownSearchPopUp]);

  const handleBorderColor = useCallback(() => {
    setBorderColor('#1D9BF0');
  }, []);

  return (
    <div>

      <button
        className="search-bar-container"
        style={{
          borderColor: isBorderColorred,
        }}
        onClick={handleSearchBarPopUp}
        onMouseDown={handleBorderColor}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
        />
        <form action="submit">
          <input type="text" placeholder="Search Twitter" className="search-bar" value={searchInput} onChange={onChange} />
        </form>
      </button>

      <SearchBarPopUp isShownSearchPopUp={isShownSearchPopUp} />

    </div>
  );
}
