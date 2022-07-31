import './NavBarFeatures.css';

export default function NavBarFeatures({ icon, name, link }) {
  return (
    <a href={link} className="navbar-feature">
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </a>
  );
}
