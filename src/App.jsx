import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import TrustBar from "./components/Trustbar/TrustBar.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TrustBar></TrustBar>
    </>
  );
}

export default App;
