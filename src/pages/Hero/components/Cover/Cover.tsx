import { useHeroContext } from "@/hooks/useHeroContext";
import "./style.scss";

import HeartIcon from "@/assets/heart_icon.svg";
import HeartIconRed from "@/assets/heart_icon_red.svg";
import { Thumbnail } from "@/types";

interface CoverProps {
  name: string;
  description: string;
  id: number;
  thumbnail: Thumbnail;
}

const Cover: React.FC<CoverProps> = ({ name, description, id, thumbnail }) => {
  const { favHeroes, setAndToggleFavHeroes } = useHeroContext();
  const isFav = !!favHeroes.find((el) => el === id);
  return (
    <div className="cover">
      <article className="cover__wrapper">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <div className="cover__wrapper__desc">
          <h1>{name}</h1>
          <p>{description}</p>
          <img
            src={isFav ? HeartIconRed : HeartIcon}
            alt="Heart icon"
            onClick={() => setAndToggleFavHeroes(id)}
          />
        </div>
      </article>
    </div>
  );
};
export default Cover;
