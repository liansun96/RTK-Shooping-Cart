import React from "react";
import { RxCross2 } from "react-icons/rx";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { decItemQuantity, incItemQuantity, removeFromCart } from "../feature/services/cartSlice";

const CartItem = (props) => {

  const { id, image, title, description, price, quantity } = props;

  const dispatch = useDispatch()

  const oneItemPrice = price * quantity

  return (
    <div className="group overflow-hidden flex justify-between items-center mb-4 custom-shadow-sm p-4 px-6 rounded-lg relative">
      <div className="flex justify-start items-center space-x-3 overflow-hidden">
        <img
          src={image}
          className="w-[100px] h-[100px] object-scale-down"
          alt=""
        />
        <div className="">
          <p className="text-base">
            {title.length > 45
              ? `${title.substring(0, 45)} .....`
              : title}
          </p>
          <p className="text-xl font-bold">${oneItemPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <button
          onClick={()=>quantity > 1 && dispatch(decItemQuantity(props))}
          className="w-[30px] h-[30px] bg-orange-300 rounded duration-150 hover:bg-orange-200 flex justify-center items-center "
        >
          <HiMinusSm />
        </button>
        <p className="w-[30px] h-[30px] flex justify-center items-center">
          {quantity}
        </p>
        <button
          onClick={()=> dispatch(incItemQuantity(props))}
          className="w-[30px] h-[30px] bg-orange-300 rounded duration-150 hover:bg-orange-200 flex justify-center items-center "
        >
          <HiPlusSm />
        </button>
      </div>
      <button
        onClick={()=>dispatch(removeFromCart(props))}
        className=" w-4 h-4 border border-black flex justify-center items-center rounded-full absolute top-2 right-2 hover:bg-black cursor-pointer translate-x-7 group-hover:rotate-[180deg] duration-500 group-hover:translate-x-0"
      >
        <RxCross2 className="font-extrabold text-3xl hover:text-white" />
      </button>
    </div>
  );
};

export default CartItem;
