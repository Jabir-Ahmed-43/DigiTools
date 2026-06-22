import { BsCheck } from "react-icons/bs";

const PurchaseCart = ({ item }) => {
  const { name, tagline, price, period, features, buttonText } = item;
  return (
    <div className="group flex flex-col p-6 space-y-4  bg-gray-200 rounded-2xl h-[448px] hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white hover:shadow-sm/200 transition-all duration-200 hover:scale-105">
      <div>
        <h1 className="text-2xl font-bold group-hover:text-white transition-all duration-200">{name}</h1>
        <p className="text-[16px] text-[#627382] group-hover:text-white transition-all duration-200">
          {tagline}
        </p>
      </div>
      <div>
        <h2 className="text-[40px] font-bold group-hover:text-white transition-all duration-200">
          ${price}
          <span className="text-[20px] font-medium group-hover:text-white transition-all duration-200">
            /{period}
          </span>
        </h2>
      </div>
      <ul className="flex-1 space-y-2">
        {features.map((item, i) => (
          <li
            className="flex items-center text-[#627382] text-[16px] group-hover:text-white transition-all duration-200"
            key={i}
          >
            <BsCheck></BsCheck>
            {item}
          </li>
        ))}
      </ul>
      <button
  className="
    w-full p-3 rounded-full
    text-white font-bold
    bg-gradient-to-r from-[#4F39F6] to-[#9514FA]
    group-hover:bg-none
    group-hover:bg-white
    group-hover:text-[#4F39F6]
    transition-all duration-200
  "
>
  {buttonText}
</button>
    </div>
  );
};

export default PurchaseCart;
