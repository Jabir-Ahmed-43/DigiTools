import { myBtnStyle } from "../Gradient-color/Gradient";

const Description = ({handleBtn, productsBtn, addedCart}) => {

  return (
    <div className="text-center font-display">
      <h1 className="text-[48px] font-bold p-4">Premium Digital Tools</h1>
      <p className="pb-4">
        Choose from our curated collection of premium digital products designed
        to boost your productivity, streamline your workflow, and supercharge
        your creativity.
      </p>
      <div className="flex items-center justify-center gap-4 font-bold text-[16px] border-1 border-gray-300 display: inline-block p-1 rounded-4xl shadow-xl/30">
        <button
          className={`p-4 ${productsBtn && myBtnStyle + 'rounded-3xl text-white'}`}
          onClick={() => handleBtn(true)}
        >
          Products
        </button>
        <button
          className={`p-4 ${!productsBtn && myBtnStyle + 'rounded-3xl text-white'}`}
          onClick={() => handleBtn(false)}
        >
          Cart ({addedCart.length})
        </button>
      </div>
    </div>
  );
};

export default Description;
