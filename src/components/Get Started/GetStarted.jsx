import { useEffect, useState } from "react";
import GetStartedCart from "./GetStartedCart";

const GetStarted = () => {
  const [getStarted, setGetStarted] = useState([]);

  useEffect(() => {
    fetch("/GetStarted.json")
      .then((res) => res.json())
      .then((data) => setGetStarted(data));
  });
  return (
    <div className="mx-50 my-30 text-center">
      <h1 className="font-extrabold text-5xl">Get Started in 3 Steps</h1>
      <p className="text-[16px] text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
      <div className="grid grid-cols-3 gap-7 mt-10">
        {getStarted.map((item) => (
          <GetStartedCart key={item.stepNumber} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
