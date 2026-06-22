import { useEffect, useState } from "react";
import GridSingle from "./GridSingle";

const ProductGrid = ({handleAddedCart}) => {
  const [productGrid, setProductGrid] = useState([]);

  useEffect(() => {
    fetch("/DigiTools.json")
      .then((res) => res.json())
      .then((data) => setProductGrid(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-50 py-30">
      {productGrid.map((product) => (
        <GridSingle key={product.id} product={product} handleAddedCart={handleAddedCart}></GridSingle>
      ))}
    </div>
  );
};

export default ProductGrid;
