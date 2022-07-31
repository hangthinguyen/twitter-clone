import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis, faHashtag, faHome, faList,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell, faBookmark, faEnvelope, faUser,
} from '@fortawesome/free-regular-svg-icons';
import NavBarFeatures from '../NavBarFeatures/NavBarFeatures';
import './NavContainer.css';

export default function NavContainer() {
  const [navfeatures] = useState([
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faHome} />,
      name: 'Home',
      link: 'https://twitter.com/home',
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faHashtag} />,
      name: 'Explore',
      link: 'https://twitter.com/explore',
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faBell} />,
      name: 'Notifications',
      link: 'https://twitter.com/notifications',
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      name: 'Messages',
      link: 'https://twitter.com/messages',
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faBookmark} />,
      name: 'Bookmarks',
      link: 'https://twitter.com/i/bookmarks',
    },
    {
      id: 6,
      icon: <FontAwesomeIcon icon={faList} />,
      name: 'Lists',
      link: 'https://twitter.com/613Bang7an/lists',
    },
    {
      id: 7,
      icon: <FontAwesomeIcon icon={faUser} />,
      name: 'Profile',
      link: 'https://twitter.com/613Bang7an',
    },
    {
      id: 8,
      icon: <FontAwesomeIcon icon={faEllipsis} />,
      name: 'More',
    },
  ]);

  const navbarFeatureList = navfeatures.map((navfeature) => (
    <NavBarFeatures
      key={navfeature.id}
      icon={navfeature.icon}
      name={navfeature.name}
      link={navfeature.link}
    />
  ));

  return (
    <div>
      {navbarFeatureList}
    </div>
  );
}
