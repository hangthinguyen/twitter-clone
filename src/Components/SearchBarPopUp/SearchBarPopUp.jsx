import './SearchBarPopUp.css';

export default function SearchBarPopUp({ isShownSearchPopUp }) {
  return (
    <div
      className="search-bar-pop-up-container"
      style={{
        display: !isShownSearchPopUp ? 'block' : 'none',
      }}
    >
      Hello
    </div>
  );
}
