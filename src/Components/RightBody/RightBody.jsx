import Feed from '../Feed/Feed';
import './RightBody.css';

export default function RightBody({
  items, setItems, isShown, setShown,
}) {
  return (
    <div className="right-body">
      <Feed items={items} setItems={setItems} isShown={isShown} setShown={setShown} />
    </div>
  );
}
