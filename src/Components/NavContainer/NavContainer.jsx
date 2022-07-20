import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faHashtag, faHome, faList } from '@fortawesome/free-solid-svg-icons';
import NavBarFeatures from '../NavBarFeatures/NavBarFeatures';
import './NavContainer.css';
import { faBell, faBookmark, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

export default function NavContainer() {
    const [navfeatures] = useState([
        {
            id: 1, 
            icon: <FontAwesomeIcon icon={faHome}/>,
            name: 'Home'
        },
        {
            id: 2, 
            icon: <FontAwesomeIcon icon={faHashtag}/>,
            name: 'Explore'
        },
        {
            id: 3, 
            icon: <FontAwesomeIcon icon={faBell}/>,
            name: 'Notifications'
        },
        {
            id: 4, 
            icon: <FontAwesomeIcon icon={faEnvelope}/>,
            name: 'Messages'
        },
        {
            id: 5, 
            icon: <FontAwesomeIcon icon={faBookmark}/>,
            name: 'Bookmarks'
        },
        {
            id: 6, 
            icon: <FontAwesomeIcon icon={faList}/>,
            name: 'Lists'
        },
        {
            id: 7, 
            icon: <FontAwesomeIcon icon={faUser}/>,
            name: 'Profile'
        },
        {
            id: 8, 
            icon: <FontAwesomeIcon icon={faEllipsis}/>,
            name: 'More'
        },
    ])

    const navbarFeatureList = navfeatures.map((navfeature) => <NavBarFeatures key={navfeature.id} icon={navfeature.icon} name={navfeature.name}/>)

    return (
        <div>
            {navbarFeatureList}
        </div>
    )
}