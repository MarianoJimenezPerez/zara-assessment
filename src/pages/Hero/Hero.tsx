import React from "react";
import { useParams } from "react-router-dom";
import ComicsList from "./components/ComicsList/ComicsList";
import Cover from "./components/Cover/Cover";
import { Hero } from "@/types";

const Hero: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [hero, setHero] = React.useState<Hero | undefined>(undefined);

  const { id } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { VITE_API_BASE_URL, VITE_API_HASH, VITE_API_KEY, VITE_API_TS } =
          import.meta.env;
        const response = await fetch(
          `${VITE_API_BASE_URL}/v1/public/characters/${id}?apikey=${VITE_API_KEY}&ts=${VITE_API_TS}&hash=${VITE_API_HASH}`
        );
        const data = await response.json();
        setHero(data.data.results[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return (
    <main>
      {loading && <p className="container">Loading ...</p>}
      {hero !== undefined && !loading && (
        <>
          <Cover
            name={hero?.name}
            description={hero?.description}
            id={hero?.id}
            thumbnail={hero?.thumbnail}
          />
          <ComicsList />
        </>
      )}
      {hero === undefined && !loading && (
        <h2 className="container">
          Ocurrio un error al intentar obtener el heroe id: {id}
        </h2>
      )}
    </main>
  );
};
export default Hero;
