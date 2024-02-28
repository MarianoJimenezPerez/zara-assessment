import SearchBar from "@/components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";
import HeroList from "@/components/HeroList/HeroList";
import "./style.scss";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar onChangeFn={(value) => console.log(value)} />
      <div className="container results-count">
        <span>50 results</span>
      </div>
      <section className="container">
        <HeroList />
      </section>
    </>
  );
};
export default Home;
