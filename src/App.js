import logo from "./images/logo.svg";
// import "./App.css";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
import "./components/AirBnb_Experiences/style.css";
import NavBar from "./components/AirBnb_Experiences/Navbar";
import Hero from "./components/AirBnb_Experiences/Hero";
import Card from "./components/AirBnb_Experiences/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      {/* <NavBar />
      <Header />
      <MainContent />
      <Footer /> */}
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
      {/* <Card
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> */}
    </div>
  );
}

export default App;
