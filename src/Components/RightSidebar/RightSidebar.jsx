import { useCallback, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './RightSidebar.css';

export default function RightSidebar() {
  const [searchInput, setSearchInput] = useState([]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  }, []);

  return (
    <div className="right-side-bar-container">
      <SearchBar
        searchInput={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}
