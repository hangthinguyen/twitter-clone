import './SearchBarPopUp.css';

export default function SearchBarPopUp({ isShownSearchPopUp }) {
  return (
    <div
      className="search-bar-pop-up-container"
      style={{
        display: !isShownSearchPopUp ? 'flex' : 'none',
      }}
    >
      <span className="search-bar-text">
        Try searching for people, topics, or keywords
      </span>
    </div>
  );
}
