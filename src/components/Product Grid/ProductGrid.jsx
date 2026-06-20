import { useEffect, useState } from "react";
import GridSingle from "./GridSingle";

const ProductGrid = () => {
  const [productGrid, setProductGrid] = useState([]);

  useEffect(() => {
    fetch("/DigiTools.json")
      .then((res) => res.json())
      .then((data) => setProductGrid(data));
  }, []);

  return (
    <div>
      {productGrid.map((product) => (
        <GridSingle key={product.id} product={product}></GridSingle>
      ))}
    </div>
  );
};

export default ProductGrid;
