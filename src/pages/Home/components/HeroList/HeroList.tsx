import { useHeroContext } from "@/hooks/useHeroContext";
import "./style.scss";
import HeroCard from "../HeroCard/HeroCard";

const HeroList: React.FC = () => {
  const { heroes, favHeroes, showFav } = useHeroContext();

  const filteredHeroes = !showFav
    ? heroes
    : heroes.filter((hero) => favHeroes.includes(hero.id));
  return (
    <ul className="hero-list">
      {filteredHeroes.length > 0 &&
        filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            name={hero.name}
            thumbnail={hero.thumbnail}
          />
        ))}
    </ul>
  );
};
export default HeroList;
