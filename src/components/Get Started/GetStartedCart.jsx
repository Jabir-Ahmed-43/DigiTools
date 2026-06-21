const GetStartedCart = ({ item }) => {
  const { stepNumber, title, description, icon } = item;
  return (
    <div className="relative text-center border border-gray-100 p-8 rounded-2xl flex flex-col items-center shadow-sm bg-white min-h-[320px] justify-center">
      <p className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
        {stepNumber}
      </p>
      <div className="space-y-4 flex flex-col justify-center items-center">
        <div className="h-[100px] w-[100px]  bg-purple-200 rounded-full flex justify-center items-center">
          <img
            src={icon}
            className="h-[60px] w-[60px]  "
            alt=""
          />
        </div>

        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-[16px] text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default GetStartedCart;
