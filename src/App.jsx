import { useState } from "react";
import "./App.css";
import CartPage from "./components/Cart/CartPage.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Description from "./components/Product Grid/Description.jsx";
import ProductGrid from "./components/Product Grid/ProductGrid.jsx";
import TrustBar from "./components/Trustbar/TrustBar.jsx";

function App() {
  const [addedCart, setAddedCart] = useState([]);

  function handleAddedCart(item) {
    setAddedCart((prevItems) => [...prevItems, item]);
  }
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TrustBar></TrustBar>
      <Description></Description>
      <ProductGrid handleAddedCart={handleAddedCart}></ProductGrid>

      <CartPage addedCart={addedCart}></CartPage>
    </>
  );
}

export default App;
