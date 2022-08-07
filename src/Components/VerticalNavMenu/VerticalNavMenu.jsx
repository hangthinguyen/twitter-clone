import NavLogoBody from '../NavLogoBody/NavLogoBody';
import AccountButton from '../AccountButton/AccountButton';
import './VerticalNavMenu.css';

export default function VerticalNavMenu({ onClick }) {
  return (
    <div className="vertical-nav">
      <NavLogoBody onClick={onClick} />
      <AccountButton />
    </div>
  );
}
