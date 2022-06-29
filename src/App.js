import logo from "./images/logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
