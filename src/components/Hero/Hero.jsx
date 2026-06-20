import { FaPlay } from "react-icons/fa6";
import HeroImage from "../../assets/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg";
import { myBtnStyle } from "../Gradient-color/Gradient";

const Hero = () => {
  return (
    <div className="font-display max-w-7xl flex items-center mx-50 my-15 gap-15">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8EBFF] px-4 py-2 font-sans font-medium text-[#7C3AED]">
            <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#C4B5FD]">
              <div className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]"></div>
            </div>

            <span className="text-sm tracking-wide">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="text-7xl font-extrabold">
            Land your dream role, faster.
          </h1>
          <p className="text-[#627382]">
            Build an ATS-optimized resume, showcase your portfolio, and unlock
            premium tools designed to get you hired. Stand out to recruiters in
            minutes.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className={myBtnStyle + ' text-md p-2 rounded-4xl font-bold border text-white'
          }>Explore Products</button>
          <button className="flex items-center border rounded-4xl p-2 font-bold"><FaPlay />  Watch Demo</button>
        </div>
      </div>
      <div>
        <img className="w-100" src={HeroImage} alt="MacBook Image" />
      </div>
    </div>
  );
};

export default Hero;
