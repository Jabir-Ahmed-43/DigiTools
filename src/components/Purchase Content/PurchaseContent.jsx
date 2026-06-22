import { useEffect, useState } from "react";
import PurchaseCart from "./PurchaseCart";

const PurchaseContent = () => {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    fetch("/Purchase.json")
      .then((res) => res.json())
      .then((data) => setPurchases(data));
  });
  return (
    <div className="font-display">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382] text-[16px]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 mx-50 gap-6 my-10">
        {purchases.map((item, i) => (
          <PurchaseCart key={i} item={item}></PurchaseCart>
        ))}
      </div>
    </div>
  );
};

export default PurchaseContent;
