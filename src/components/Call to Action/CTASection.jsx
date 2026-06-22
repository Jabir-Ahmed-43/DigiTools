
const CTASection = () => {
  return (
    <div className="px-50 py-30 flex flex-col items-center space-y-10 font-display bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-[40px] font-extrabold text-white">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-[16px] text-white">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
      </div>
      <div className="flex items-center gap-4 text-[16px] font-semibold">
        <button className=" p-4 rounded-4xl bg-white hover:scale-105 transition-all duration-200"> <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:scale-105 transition-all duration-200">Explore Products</p></button>
        <button className=" p-4 border text-white rounded-4xl hover:scale-105 transition-all duration-200">View Pricing</button>
      </div>
      <p className="text-white text-[16px]">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default CTASection;
