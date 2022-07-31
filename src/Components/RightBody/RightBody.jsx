import Feed from '../Feed/Feed';
import RightSidebar from '../RightSidebar/RightSidebar';
import './RightBody.css';

export default function RightBody() {
  return (
    <div className="right-body">
      <Feed />
      <RightSidebar />
    </div>
  );
}
