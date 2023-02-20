import "./navbar.css";
import imageAvatar from "../../assets/image-avatar.jpg";
import logo from "../../assets/logo.svg";
import iconMoon from "../../assets/icon-moon.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__nav-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navbar__nav-container">
        <div className="navbar__nav-switcher">
          <img src={iconMoon} alt="icon-moon"></img>
        </div>
        <div className="navbar__nav-avatar">
          <img src={imageAvatar} alt="avatar"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
