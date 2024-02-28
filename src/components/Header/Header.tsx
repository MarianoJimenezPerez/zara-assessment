import { Link } from "react-router-dom";
import MarvelLogo from "@/assets/marvel_logo.svg";
import HeartIconRed from "@/assets/heart_icon_red.svg";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link to={"/"}>
          <img src={MarvelLogo} alt="Marvel logo" />
        </Link>
        <button className="header__favs">
          <img src={HeartIconRed} alt="Heart icon" />
          <span>3</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
