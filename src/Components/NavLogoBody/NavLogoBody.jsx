import Logo from '../Logo/Logo';
import NavContainer from '../NavContainer/NavContainer';
import TweetButton from '../TweetButton/TweetButton';
import './NavLogoBody.css';

export default function NavLogoBody() {
  return (
    <div>
      <Logo />
      <NavContainer />
      <TweetButton />
    </div>
  );
}
