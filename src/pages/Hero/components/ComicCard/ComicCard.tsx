import ComicExample from "@/assets/comic_example.jpg";
import "./style.scss";

const ComicCard: React.FC = () => {
  return (
    <li className="comic-card">
      <img src={ComicExample} alt="Comic example" />
      <h4>Who is...? Adam Warlock Infinity Comic #1</h4>
      <span>1967</span>
    </li>
  );
};
export default ComicCard;
