import "./App.css";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Description from "./components/Product Grid/Description.jsx";
import ProductGrid from "./components/Product Grid/ProductGrid.jsx";
import TrustBar from "./components/Trustbar/TrustBar.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TrustBar></TrustBar>
      <Description></Description>
      <ProductGrid></ProductGrid>
    </>
  );
}

export default App;
