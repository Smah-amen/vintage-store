import { GiShoppingCart } from "react-icons/gi";


const HeaderBasket = ({ count, handelClick }) => {
  return (
    <div className="relative flex items-center justify-center w-10 h-12  rounded-full ">
      <button onClick={handelClick} className="cursor-pointer">
      <GiShoppingCart size={40} />
        <span className="absolute top-0 right-0 bg-amber-50 text-inherit rounded-full px-1 py-1 text-sm">
          {count}
        </span>
      </button>
    </div>
  );
};

export default HeaderBasket;
