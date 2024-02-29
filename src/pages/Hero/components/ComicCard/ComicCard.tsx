import { useCallback } from "react";
import { Thumbnail } from "@/types";
import "./style.scss";

interface ComicCardProps {
  thumbnail: Thumbnail;
  name: string;
}

const ComicCard: React.FC<ComicCardProps> = ({ thumbnail, name }) => {
  const useExtractContentInParentheses = () => {
    return useCallback((inputString: string): string | null => {
      const regex = /\(([^)]+)\)/;
      const matches = inputString.match(regex);

      if (matches && matches.length > 1) {
        return matches[1];
      } else {
        return null;
      }
    }, []);
  };

  const extractContentInParentheses = useExtractContentInParentheses();

  const contentInParentheses = name ? extractContentInParentheses(name) : null;

  return (
    <li className="comic-card">
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`${name} comic`}
      />
      <h4>{name}</h4>
      <span>{contentInParentheses}</span>
    </li>
  );
};

export default ComicCard;
