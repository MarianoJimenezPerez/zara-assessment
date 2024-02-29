import { Hero } from "@/types";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type HeroContextType = {
  heroes: Hero[];
  setHeroes: Dispatch<SetStateAction<Hero[]>>;
  favHeroes: number[];
  setAndToggleFavHeroes: (newFavHeroId: number) => void;
  showFav: boolean;
  setShowFav: Dispatch<SetStateAction<boolean>>;
};

export const HeroContext = createContext<HeroContextType | undefined>(
  undefined
);
export const HeroContextProvider = ({ children }: { children: ReactNode }) => {
  const [showFav, setShowFav] = useState<boolean>(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [favHeroes, setFavHeroes] = useState<number[]>([]);

  useEffect(() => {
    const storedFavHeroes = localStorage.getItem("favHeroes");

    if (storedFavHeroes) {
      const parsedFavHeroes: number[] = JSON.parse(storedFavHeroes);
      setFavHeroes(parsedFavHeroes);
    }
  }, []);

  const setAndToggleFavHeroes = (heroId: number) => {
    const storedFavHeroes = localStorage.getItem("favHeroes");

    if (storedFavHeroes) {
      const parsedFavHeroes: number[] = JSON.parse(storedFavHeroes);
      const isHeroInFavorites = parsedFavHeroes.includes(heroId);

      const updatedFavHeroes = isHeroInFavorites
        ? parsedFavHeroes.filter((id) => id !== heroId)
        : [...parsedFavHeroes, heroId];

      localStorage.setItem("favHeroes", JSON.stringify(updatedFavHeroes));
      setFavHeroes(updatedFavHeroes);
    } else {
      localStorage.setItem("favHeroes", JSON.stringify([heroId]));
      setFavHeroes([heroId]);
    }
  };

  const contextValue: HeroContextType = {
    heroes,
    setHeroes,
    favHeroes,
    setAndToggleFavHeroes,
    showFav,
    setShowFav,
  };

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};
