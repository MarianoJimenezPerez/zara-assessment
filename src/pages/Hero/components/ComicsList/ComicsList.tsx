import ComicCard from "../ComicCard/ComicCard";
import "./style.scss";

const ComicsList = () => {
  return (
    <section className="comics-list">
      <h2>COMICS</h2>
      <ul>
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </ul>
    </section>
  );
};
export default ComicsList;
