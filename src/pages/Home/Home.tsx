import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import HeroList from "@/pages/Home/components/HeroList/HeroList";
import "./style.scss";
import { useHeroContext } from "@/hooks/useHeroContext";
import useHeroService from "./hooks/useHeroService";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { heroes, showFav } = useHeroContext();

  const { loading } = useHeroService(searchValue, showFav);

  return (
    <main>
      {showFav && <h2 className="container favorites">Favorites</h2>}
      <SearchBar onChangeFn={(value) => setSearchValue(value)} />
      <div className="container results-count">
        <span>{heroes.length} results</span>
      </div>
      <section className="container">
        {loading ? <p>Loading...</p> : <HeroList />}
      </section>
    </main>
  );
};
export default Home;
