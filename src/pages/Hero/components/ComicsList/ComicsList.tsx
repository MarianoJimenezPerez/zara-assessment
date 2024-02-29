import React from "react";
import { useParams } from "react-router-dom";
import ComicCard from "../ComicCard/ComicCard";
import "./style.scss";
import { SingleComic } from "./types/single-comic";

const ComicsList = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [comics, setComics] = React.useState<SingleComic[]>([]);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchComics = async () => {
      try {
        const { VITE_API_BASE_URL, VITE_API_HASH, VITE_API_KEY, VITE_API_TS } =
          import.meta.env;
        const response = await fetch(
          `${VITE_API_BASE_URL}/v1/public/characters/${id}/comics?apikey=${VITE_API_KEY}&ts=${VITE_API_TS}&hash=${VITE_API_HASH}`
        );
        const data = await response.json();
        setComics(data.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, [id]);
  return (
    <section className="comics-list">
      <h2>COMICS</h2>
      {loading && <p>Loading...</p>}
      {comics.length > 0 && !loading && (
        <ul>
          {comics.map((comic) => (
            <ComicCard
              key={comic.id}
              name={comic.title}
              thumbnail={comic.thumbnail}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
export default ComicsList;
