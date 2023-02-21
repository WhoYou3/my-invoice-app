import "./navbar.css";
import imageAvatar from "../../assets/image-avatar.jpg";
import logo from "../../assets/logo.svg";
import iconMoon from "../../assets/icon-moon.svg";
import { useAppDispatch, useAppSelector } from "../../store/store";

import { toggleMode } from "../../store/features/toggleModeleSlice";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const test = useAppSelector((state) => state.toggle.isDark);
  console.log(test);
  return (
    <nav className="navbar">
      <div className="navbar__nav-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navbar__nav-container">
        <div className="navbar__nav-switcher">
          <img
            onClick={() => dispatch(toggleMode())}
            src={iconMoon}
            alt="icon-moon"
          ></img>
        </div>
        <div className="navbar__nav-avatar">
          <img src={imageAvatar} alt="avatar"></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
