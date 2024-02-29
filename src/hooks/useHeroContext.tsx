import { useContext } from "react";
import { HeroContext } from "@/context/HeroesContext";

export const useHeroContext = () => {
  const context = useContext(HeroContext);

  if (!context) {
    throw new Error("useHeroContext must be used within a HeroContextProvider");
  }

  return context;
};
