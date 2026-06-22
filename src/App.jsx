import { useState } from "react";
import "./App.css";
import CTASection from "./components/Call to Action/CTASection.jsx";
import CartPage from "./components/Cart/CartPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GetStarted from "./components/Get Started/GetStarted.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Description from "./components/Product Grid/Description.jsx";
import ProductGrid from "./components/Product Grid/ProductGrid.jsx";
import PurchaseContent from "./components/Purchase Content/PurchaseContent.jsx";
import TrustBar from "./components/Trustbar/TrustBar.jsx";

function App() {
  const [addedCart, setAddedCart] = useState([]);
  const [productsBtn, setProductBtn] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleBtn(value) {
    // console.log(value);

    setProductBtn(value);
  }

  function handleAddedCart(item, price) {
    setAddedCart((prevItems) => [...prevItems, item]);
    setTotalPrice(totalPrice + +price);
  }

  function handleRemoveFromCart(item, price){
    setAddedCart(addedCart.filter(curr => curr.id !== item.id));
    setTotalPrice(totalPrice - +price);
  }

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <TrustBar></TrustBar>
      <Description
        handleBtn={handleBtn}
        productsBtn={productsBtn}
        addedCart={addedCart}
      ></Description>
      {productsBtn && (
        <ProductGrid handleAddedCart={handleAddedCart}></ProductGrid>
      )}
      {productsBtn && (
        <GetStarted handleAddedCart={handleAddedCart}></GetStarted>
      )}
      {productsBtn && (
        <PurchaseContent handleAddedCart={handleAddedCart}></PurchaseContent>
      )}
      {productsBtn && (
        <CTASection handleAddedCart={handleAddedCart}></CTASection>
      )}

      {!productsBtn && (
        <CartPage addedCart={addedCart} handleRemoveFromCart={handleRemoveFromCart} totalPrice={totalPrice}></CartPage>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
