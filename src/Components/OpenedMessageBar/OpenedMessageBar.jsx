import { useState } from 'react';
import {
  faAnglesDown, faAnglesUp, faEnvelopeCircleCheck, faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pic1 from '../../assets/pic1.jpeg';
import Pic2 from '../../assets/pic2.jpeg';
import Pic3 from '../../assets/pic3.jpeg';
import Pic5 from '../../assets/pic5.jpeg';
import Pic4 from '../../assets/pic4.jpeg';
import Messages from '../Messages/Messages';
import './OpenedMessageBar.css';

export default function OpenedMessageBar({ onClick, isMessageShown }) {
  const [messages] = useState([
    {
      id: '0',
      mUsername: 'Isabella',
      mNickname: '@Isbella',
      mTime: 'Oct 28, 2021',
      mMessage: 'Hello',
      ImgS: Pic1,
    },
    {
      id: '1',
      mUsername: 'Hanna',
      mNickname: '@Hanna',
      mTime: 'Sept 20, 2021',
      mMessage: 'Thank you!',
      ImgS: Pic2,
    },
    {
      id: '2',
      mUsername: 'Ken',
      mNickname: '@Ken',
      mTime: 'Apr 16, 2021',
      mMessage: 'You are welcome!',
      ImgS: Pic3,
    },
    {
      id: '3',
      mUsername: 'Lan',
      mNickname: '@Lan',
      mTime: 'Jan 10, 2021',
      mMessage: 'Nice!',
      ImgS: Pic4,
    },
    {
      id: '4',
      mUsername: 'Rum',
      mNickname: '@Rum',
      mTime: 'Nov 16, 2020',
      mMessage: 'Blah',
      ImgS: Pic5,
    },
  ]);

  const MessagesList = messages.map((message) => (
    <Messages
      key={message.id}
      mMessage={message.mMessage}
      mUsername={message.mUsername}
      mNickname={message.mNickname}
      mTime={message.mTime}
      ImgS={message.ImgS}
      todoid={message.id}
    />
  ));

  return (
    <div className="open-message-bar-container">
      <div
        className="open-message-bar-header"
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex="0"
      >

        <div className="messages">Messages</div>

        <div className="message-icons-container">

          <div className="message-icon">
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
          </div>
          <div className="message-icon">
            { isMessageShown
              ? <FontAwesomeIcon icon={faAnglesDown} /> : <FontAwesomeIcon icon={faAnglesUp} />}
          </div>

        </div>
      </div>
      <div
        style={{
          display: isMessageShown ? 'block' : 'none',
        }}
      >
        <div className="m-request-container">
          <div className="envelope-text-icon-container">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="envelope-text-icon" />
          </div>

          <div>
            <div className="m-username">Message requests</div>
            <div className="request-text">3 pending requests</div>
          </div>

        </div>
        {MessagesList}
      </div>
    </div>
  );
}
