import { iconMoon, imageAvatar, logo, iconSun } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { toggleMode } from "../../store/features/toggleModeleSlice";
import "./navbar.css";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.toggle.isDark);

  return (
    <nav className="navbar">
      <div className="navbar__nav-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navbar__nav-container">
        <div className="navbar__nav-switcher">
          <img
            onClick={() => dispatch(toggleMode())}
            src={isDarkMode ? iconSun : iconMoon}
            alt="icon-moon/sun"
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
