import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import SearchBarPopUp from '../SearchBarPopUp/SearchBarPopUp';
import './SearchBar.css';

export default function SearchBar({
  searchInput, onChange, onClick, isShownSearchPopUp,
  isInputValueMoreThan0, onDelete,
}) {
  const [isBorderColorred, setBorderColor] = useState('#EFF3F4');
  const [isBackgroundColorred, setBackgroundColor] = useState('#EFF3F4');

  const handleColor = useCallback(() => {
    setBorderColor('#1D9BF0');
    setBackgroundColor('#fff');
  }, []);

  return (
    <div className="search-pop-up-container">

      <button
        className="search-bar-container"
        style={{
          borderColor: isBorderColorred,
          backgroundColor: isBackgroundColorred,
        }}
        onClick={onClick}
        onMouseDown={handleColor}
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
            visibility: isInputValueMoreThan0 > 0 ? 'visible' : 'hidden',
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </button>

      <SearchBarPopUp isShownSearchPopUp={isShownSearchPopUp} />

    </div>
  );
}
