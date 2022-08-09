import { useCallback, useState } from 'react';
import Popup from '../Popup/Popup';
import RightBody from '../RightBody/RightBody';
import RightSidebar from '../RightSidebar/RightSidebar';
import VerticalNavMenu from '../VerticalNavMenu/VerticalNavMenu';
import './Body.css';

export default function Body() {
  const [items, setItems] = useState([]);
  const [isPopup, setPopup] = useState(false);

  const handleTweetBtnClick = useCallback(() => {
    setPopup(!isPopup);
  }, [isPopup]);

  const handleTweetBtnClose = useCallback(() => {
    setPopup(false);
  }, [setPopup]);

  return (
    <div className="body">
      <VerticalNavMenu onClick={handleTweetBtnClick} />
      <RightBody items={items} setItems={setItems} />
      <Popup
        isPopup={isPopup}
        setPopup={setPopup}
        onClick={handleTweetBtnClose}
        items={items}
        setItems={(val) => {
          setItems(val);
          handleTweetBtnClose();
        }}
      />
      <RightSidebar />
    </div>
  );
}
