import { IoCheckmarkSharp } from "react-icons/io5";
import { myBtnStyle } from "../Gradient-color/Gradient";

const GridSingle = ({ product,handleAddedCart }) => {
  const { name, description, price, period, features, icon } = product;
  return (
    <div className="border rounded-xl shadow-xl p-6 space-y-4 font-display">
      <img className="border p-2 rounded-full text-gray-300" src={icon} alt={name} />
      <h1 className="text-[24px] font-bold">{name}</h1>
      <p className="text-[16px] text-[#627382]">{description}</p>
      <p >
        <strong className="text-2xl">${price}</strong><span className="text-[#627382]
        ">/{period}</span>
      </p>
      <ul>
        {features.map((feature, i) => (
          <li key={i} className="text-[#627382] flex items-center" ><IoCheckmarkSharp /> {feature}</li>
        ))}
      </ul>
      <button className={myBtnStyle + "w-full rounded-4xl p-3 text-white font-bold"} onClick={()=> handleAddedCart(product, price)}>Buy Now</button>
    </div>
  );
};

export default GridSingle;
