import { useHeroContext } from "@/hooks/useHeroContext";
import { Link } from "react-router-dom";
import HeartIcon from "@/assets/heart_icon.svg";
import HeartIconRed from "@/assets/heart_icon_red.svg";
import "./style.scss";
import { Thumbnail } from "@/types";

interface HeroCardProps {
  id: number;
  name: string;
  thumbnail: Thumbnail;
}

const HeroCard: React.FC<HeroCardProps> = ({ id, name, thumbnail }) => {
  const { setAndToggleFavHeroes, favHeroes } = useHeroContext();
  const isFav: boolean = !!favHeroes.find((el) => el === id);
  return (
    <li className="hero-card">
      <Link to={`/hero/${id}`} className="hero-card__img">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </Link>

      <div className="hero-card__detail">
        <div className="hero-card__detail__divider" />
        <h3>{name}</h3>

        <img
          src={isFav ? HeartIconRed : HeartIcon}
          alt="Heart icon"
          onClick={() => setAndToggleFavHeroes(id)}
          style={{ fill: "yelow" }}
        />
      </div>
    </li>
  );
};
export default HeroCard;
