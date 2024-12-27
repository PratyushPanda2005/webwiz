import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import MovieSection from "./Components/MovieSection.jsx";
import Movies from "./Components/Movies.jsx";
import Content from "./Components/Content.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MovieSection />
      <Movies />
      <Content/>
      <Footer />
    </>
  );
}

export default App;
