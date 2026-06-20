const TrustBar = () => {
  return (
    <div className="flex justify-evenly items-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15 px-50 text-white font-display">
      <div className="">
        <h1 className="text-4xl font-bold">50K+</h1>
        <p>Active Users</p>
      </div>
<div className="h-12 w-[1px] bg-white/50" />
      <div>
        <h1 className="text-4xl font-bold">200+</h1>
        <p>Premium Tools</p>
      </div>
<div className="h-12 w-[1px] bg-white/50" />
      <div>
        <h1 className="text-4xl font-bold">4.9</h1>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default TrustBar;
