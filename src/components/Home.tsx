import Calendar from "./Calendar";
import CardsSection from "./CardsSection";
import Hero from "./Hero";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Hero />
      <CardsSection/>
      <Menu />
      <Calendar />
    </div>
  );
};

export default Home;
