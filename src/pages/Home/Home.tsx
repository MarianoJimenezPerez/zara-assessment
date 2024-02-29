import SearchBar from "@/components/SearchBar/SearchBar";
import HeroList from "@/pages/Home/components/HeroList/HeroList";
import "./style.scss";

const Home: React.FC = () => {
  return (
    <main>
      <SearchBar onChangeFn={(value) => console.log(value)} />
      <div className="container results-count">
        <span>50 results</span>
      </div>
      <section className="container">
        <HeroList />
      </section>
    </main>
  );
};
export default Home;
