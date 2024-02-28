import { ChangeEvent } from "react";
import "./style.scss";

interface SearchBarProps {
  onChangeFn: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeFn }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeFn(e.target.value);
  };

  return (
    <div className="search-bar container">
      <input
        type="text"
        placeholder="SEARCH A CHARACTER..."
        onChange={handleChange}
        className="search-bar__input"
      />
    </div>
  );
};

export default SearchBar;
