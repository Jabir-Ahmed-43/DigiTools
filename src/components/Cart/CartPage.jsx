import { myBtnStyle } from "../Gradient-color/Gradient";
import CartItems from "./CartItems";

const CartPage = ({ addedCart }) => {
  console.log(addedCart);

  return (
    <div className="mx-50 my-10 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm font-display">
      <h1>Your Cart</h1>
      <div className="space-y-4 ">
        {addedCart.map((item, idx) => (
          <CartItems key={idx} item={item}></CartItems>
        ))}
      </div>
      <p className="my-4">Total: </p>

      <button className={myBtnStyle + "w-full rounded-4xl p-2 text-white text-sm font-bold"}>
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartPage;
