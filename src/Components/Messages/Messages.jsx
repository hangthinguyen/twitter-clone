import './Messages.css';

export default function Messages({
  mTime, mUsername, mMessage, mNickname, ImgS,
}) {
  return (
    <div className="message-pic-container">

      <div className="avatar">
        <img src={ImgS} alt="pic" className="m-pic" />
      </div>

      <div className="message-container">

        <div className="m-username-nickname-container">
          <div className="m-username">
            {mUsername}
          </div>
          <div className="m-nickname-time-container">
            {mNickname}
            <div className="devider-dot" />
            {mTime}
          </div>
        </div>

        <div>
          {mMessage}
        </div>
      </div>

    </div>
  );
}
