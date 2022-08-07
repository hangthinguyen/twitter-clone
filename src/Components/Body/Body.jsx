import { useCallback, useState } from 'react';
import Popup from '../Popup/Popup';
import RightBody from '../RightBody/RightBody';
import VerticalNavMenu from '../VerticalNavMenu/VerticalNavMenu';
import './Body.css';

export default function Body() {
  const [isPopup, setPopup] = useState(false);
  const handleTweetBtnClick = useCallback(() => {
    setPopup(!isPopup);
    console.log('hello');
  }, [isPopup]);
  return (
    <div className="body">
      <VerticalNavMenu onClick={handleTweetBtnClick} />
      <RightBody />
      <Popup isPopup={isPopup} />
    </div>
  );
}
