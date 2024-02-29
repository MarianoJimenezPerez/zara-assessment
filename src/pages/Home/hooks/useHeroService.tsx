import { useState, useEffect } from "react";
import { useHeroContext } from "@/hooks/useHeroContext";

const useHeroService = (searchValue: string, showFav: boolean) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const { setHeroes } = useHeroContext();

  useEffect(() => {
    if (showFav) return;

    const fetchData = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setHeroes, searchValue, showFav]);

  return { loading };
};

export default useHeroService;
