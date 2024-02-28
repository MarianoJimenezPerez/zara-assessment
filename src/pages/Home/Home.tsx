import SearchBar from "@/components/SearchBar/SearchBar";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar onChangeFn={(value) => console.log(value)} />
      <section className="container">Home</section>
    </>
  );
};
export default Home;
