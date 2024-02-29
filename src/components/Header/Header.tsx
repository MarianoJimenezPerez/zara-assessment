import { Link } from "react-router-dom";
import MarvelLogo from "@/assets/marvel_logo.svg";
import HeartIconRed from "@/assets/heart_icon_red.svg";
import "./style.scss";
import { useHeroContext } from "@/hooks/useHeroContext";

const Header: React.FC = () => {
  const { favHeroes, setShowFav } = useHeroContext();
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Link to={"/"} onClick={() => setShowFav(() => false)}>
          <img src={MarvelLogo} alt="Marvel logo" />
        </Link>
        <button
          className="header__favs"
          onClick={() => setShowFav((prev) => !prev)}
        >
          <img src={HeartIconRed} alt="Heart icon" />
          <span>{favHeroes.length}</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
