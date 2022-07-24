import NavLogoBody from '../NavLogoBody/NavLogoBody';
import AccountButton from '../AccountButton/AccountButton';
import './VerticalNavMenu.css';

export default function VerticalNavMenu() {
    return (
        <div className='vertical-nav'>
            <NavLogoBody/>
            <AccountButton/>
        </div>
    )
}