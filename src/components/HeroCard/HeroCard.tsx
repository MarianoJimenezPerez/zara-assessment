import { Link } from "react-router-dom";
import ImageExample from "@/assets/image_example.jpg";
import HeartIcon from "@/assets/heart_icon.svg";
import "./style.scss";

const HeroCard: React.FC = () => {
  return (
    <li className="hero-card">
      <Link to="/hero/dsa" className="hero-card__img">
        <img src={ImageExample} alt="Hero" />
      </Link>

      <div className="hero-card__detail">
        <div className="hero-card__detail__divider" />
        <h3>Name</h3>
        <img src={HeartIcon} alt="Heart icon" />
      </div>
    </li>
  );
};
export default HeroCard;
