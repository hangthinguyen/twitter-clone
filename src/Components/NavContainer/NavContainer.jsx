import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faHome } from '@fortawesome/free-solid-svg-icons';
import NavBarFeatures from '../NavBarFeatures/NavBarFeatures';
import './NavContainer.css';

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
            icon: <FontAwesomeIcon icon={faHome}/>,
            name: 'Notifications'
        },
        {
            id: 4, 
            icon: <FontAwesomeIcon icon={faHome}/>,
            name: 'Messages'
        },
        {
            id: 5, 
            icon: <FontAwesomeIcon icon={faHome}/>,
            name: 'Bookmarks'
        },
        {
            id: 6, 
            icon: <FontAwesomeIcon icon={faHome}/>,
            name: 'Lists'
        },
        {
            id: 7, 
            icon: <FontAwesomeIcon icon={faHome}/>,
            name: 'Profile'
        },
        {
            id: 8, 
            icon: <FontAwesomeIcon icon={faHome}/>,
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