import { PiShoppingCartBold } from "react-icons/pi";
import { myBtnStyle, myTextStyle } from "../Gradient-color/Gradient";
myBtnStyle

const Navbar = () => {
  return (
    <div className="font-display flex justify-between items-center px-50 py-10 shadow-md max-w-full w-auto">
      <h1 className={myTextStyle + ' text-3xl font-bold'}>DigiTools</h1>
      <div className="space-x-8 font-semibold">
        <a href="">Products</a>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Testimonials</a>
        <a href="">FAQ</a>
      </div>
      <div className="space-x-4 flex items-center font-semibold">
        <button className="flex items-center"> <PiShoppingCartBold /> Login</button>
        <button className={myBtnStyle + 'p-2 rounded-4xl text-white'}>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
