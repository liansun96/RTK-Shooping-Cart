import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../feature/services/cartSlice";

const Search = () => {
    const dispatch = useDispatch()
  const location = useLocation();
  const searchProduct = location.state.filterProduct;


  console.log(searchProduct);
  return (
    <div>
      <div className="w-[1200px] mx-auto flex flex-wrap justify-start gap-5 ">
        {searchProduct.map((pd) => {
          return (
            <div className="group hover:custom-shadow-md w-[270px] h-[350px] bg-white border flex flex-col space-y-2 justify-center items-center rounded ">
              <img
                src={pd.image}
                className="group-hover:scale-95 group-hover:-rotate-6 duration-150 w-[200px] h-[200px] object-scale-down  -top-10 -left-10"
                alt=""
              />
              <h3 className="text-lg font-semibold">
                {/* {`${title.substring(0,40)} ....`} */}
                {pd.title.length > 20 ? `${pd.title.substring(0, 20)} ...` : pd.title}
              </h3>
              <h1 className="text-lg font-bold">$ {pd.price}</h1>
              <div className="space-x-5">
                <button
                  onClick={() => dispatch(addToCart(pd))}
                  className="bg-lime-500 duration-200 hover:bg-lime-400 hover:scale-105 text-light px-3 py-2 rounded text-sm"
                >
                  Add to Cart
                </button>
                <button className="bg-sky-500 duration-200  hover:bg-sky-400 hover:scale-105 text-light px-3 py-2 rounded text-sm">
                  View Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
