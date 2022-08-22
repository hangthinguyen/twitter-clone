import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import SearchBarPopUp from '../SearchBarPopUp/SearchBarPopUp';
import './SearchBar.css';

export default function SearchBar({
  searchInput, onChange, onClick, isShownSearchPopUp,
  onDelete,
}) {
  const [isBorderColorred, setBorderColor] = useState('#EFF3F4');
  const [isBackgroundColorred, setBackgroundColor] = useState('#EFF3F4');

  const handleColor = useCallback(() => {
    setBorderColor('#1D9BF0');
    setBackgroundColor('#fff');
  }, []);

  return (
    <div className="search-pop-up-container">

      <div
        className="search-bar-container"
        style={{
          borderColor: isBorderColorred,
          backgroundColor: isBackgroundColorred,
        }}
        onClick={onClick}
        onMouseDown={handleColor}
        role="button"
        tabIndex={0}
        onKeyDown={onClick}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
          style={{
            color: isBorderColorred,
          }}
        />
        <form action="submit" className="search-bar-form">
          <input
            type="text"
            placeholder="Search Twitter"
            className="search-bar"
            value={searchInput}
            onChange={onChange}
            onMouseDown={handleColor}
            style={{
              backgroundColor: isBackgroundColorred,
            }}
          />
        </form>
        <button
          className="search-delete-btn"
          onClick={onDelete}
          style={{
            visibility: searchInput.length > 0 ? 'visible' : 'hidden',
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>

      <SearchBarPopUp isShownSearchPopUp={isShownSearchPopUp} />

    </div>
  );
}
