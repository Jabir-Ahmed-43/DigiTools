import { myBtnStyle } from "../Gradient-color/Gradient";
import CartItems from "./CartItems";

const CartPage = ({ addedCart, totalPrice,handleRemoveFromCart }) => {
  console.log(addedCart);

  return (
    <div className="px-50 py-10 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm font-display space-x-6">
      <div><h1 className="font-bold pb-6">Your Cart</h1></div>
      
      <div className="space-y-4 ">
        {addedCart.map((item, idx) => (
          <CartItems key={idx} item={item} handleRemoveFromCart={handleRemoveFromCart}></CartItems>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="py-6">Total: </p>
        <h2 className="font-bold text-2xl">${totalPrice}</h2>
      </div>

      <button
        className={
          myBtnStyle + "w-full rounded-4xl p-3 text-white text-sm font-bold"
        }
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartPage;
