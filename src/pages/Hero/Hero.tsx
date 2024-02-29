import ComicsList from "./components/ComicsList/ComicsList";
import Cover from "./components/Cover/Cover";

const Hero: React.FC = () => {
  return (
    <main>
      <Cover />
      <ComicsList />
    </main>
  );
};
export default Hero;
