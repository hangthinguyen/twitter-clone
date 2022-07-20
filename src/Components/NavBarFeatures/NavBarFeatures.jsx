import './NavBarFeatures.css';

export default function NavBarFeatures({icon, name}) {
    return (
        <div className='navbar-feature'>
            <div className='icon'>{icon}</div>
            <div className='name'>{name}</div>
        </div>
    )
}