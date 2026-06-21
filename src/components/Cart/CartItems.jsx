const CartItems = ({ item }) => {
  const { name, price, icon } = item;
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-100 shadow-sm">
          <img src={icon} alt="" className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1>{name}</h1>
          <p>${price}</p>
        </div>
      </div>
      <button className="text-red-600 text-sm">Remove</button>
    </div>
  );
};

export default CartItems;
