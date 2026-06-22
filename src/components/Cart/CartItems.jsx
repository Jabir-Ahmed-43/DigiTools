const CartItems = ({ item, handleRemoveFromCart }) => {
  const { name, price, icon } = item;
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-100 shadow-sm">
          <img src={icon} alt="" className="w-6 h-6 text-purple-600" />
        </div>
        <div className="space-y-1">
          <h1 className="font-bold">{name}</h1>
          <p className="text-sm text-[#627382]">${price}</p>
        </div>
      </div>
      <button
        className="text-red-600 text-sm"
        onClick={() => handleRemoveFromCart(item, price)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItems;
