import React from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import HeroList from "@/pages/Home/components/HeroList/HeroList";
import "./style.scss";
import { useHeroContext } from "@/hooks/useHeroContext";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { heroes, setHeroes, showFav } = useHeroContext();

  React.useEffect(() => {
    if (showFav) return;
    const fetchData = async () => {
      try {
        const { VITE_API_BASE_URL, VITE_API_HASH, VITE_API_KEY, VITE_API_TS } =
          import.meta.env;
        const searchParam =
          searchValue !== "" ? `&nameStartsWith=${searchValue}` : "";
        const response = await fetch(
          `${VITE_API_BASE_URL}/v1/public/characters?apikey=${VITE_API_KEY}&ts=${VITE_API_TS}&hash=${VITE_API_HASH}&limit=50${searchParam}`
        );
        const data = await response.json();
        setHeroes(data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setHeroes, searchValue, showFav]);

  return (
    <main>
      {showFav && <h2 className="container favorites">Favorites</h2>}
      <SearchBar onChangeFn={(value) => setSearchValue(value)} />
      <div className="container results-count">
        <span>{heroes.length} results</span>
      </div>
      <section className="container">
        <HeroList />
      </section>
    </main>
  );
};
export default Home;
