import { useCallback, useState } from 'react';
import Popup from '../Popup/Popup';
import RightBody from '../RightBody/RightBody';
import VerticalNavMenu from '../VerticalNavMenu/VerticalNavMenu';
import './Body.css';

export default function Body() {
  const [items, setItems] = useState([
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: 'Hello',
      id: 364.6667327998192,
      username: 'Hang Nguyen',
      nickname: '@Hnguyen',
      time: '7h',
      commentNumber: '21',
      retweetNumber: '50',
      likeNumber: '198',
    },
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: 'My name is Hang',
      id: 943.3786926501077,
      username: 'Vinh Vu',
      nickname: '@VinhVu',
      time: '9h',
      commentNumber: '10',
      retweetNumber: '101',
      likeNumber: '203',
    },
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: 'My boyfriend is a looloo',
      id: 275.38382012485175,
      username: 'Hang Nguyen',
      nickname: '@Hnguyen',
      time: '10h',
      commentNumber: '14',
      retweetNumber: '209',
      likeNumber: '301',
    },
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: 'Booboo lalooloo is my bf',
      id: 99.8199798402728,
      username: 'Rumble',
      nickname: '@VRumRum',
      time: '14h',
      commentNumber: '50',
      retweetNumber: '201',
      likeNumber: '404',
    },
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: '>.<',
      id: 853.2223131599641,
      username: 'Vinh Vu',
      nickname: '@VinhVu',
      time: '15h',
      commentNumber: '45',
      retweetNumber: '405',
      likeNumber: '306',
    },
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: 'lalalala',
      id: 765.6726873870781,
      username: 'Brownie',
      nickname: '@VinhVu',
      time: '1d',
      commentNumber: '109',
      retweetNumber: '308',
      likeNumber: '195',
    },
    {
      imgSrc: '/static/media/samplepic.7337fba50c590ecc7138.jpg',
      name: 'booloolalaloo',
      id: 765.67268738,
      username: 'Brownie',
      nickname: '@VinhVu',
      time: '2d',
      commentNumber: '309',
      retweetNumber: '208',
      likeNumber: '105',
    },
  ]);

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
      <RightBody items={items} setItems={setItems} key={items.id} />
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

    </div>
  );
}
