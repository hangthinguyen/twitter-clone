import Logo from '../Logo/Logo';
import NavContainer from '../NavContainer/NavContainer';
import TweetButton from '../TweetButton/TweetButton';
import './NavLogoBody.css';

export default function NavLogoBody({ onClick }) {
  return (
    <div>
      <Logo />
      <NavContainer />
      <TweetButton onClick={onClick} />
    </div>
  );
}
