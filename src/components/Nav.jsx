import React, { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SiShopify } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { cartItem } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setIsLoading(false);
    console.log(data);
  };

  const filterProduct = products.filter((item)=> item.title.toLowerCase().includes(search))
  console.log(filterProduct)

  const searchHandlar = (e) => {
    e.preventDefault();
    navigate('/search',{state:{filterProduct}})
    e.target.value =''    
  };

  return (
    <div className="w-[1200px] my-8 mx-auto flex justify-between">
      <Link to={"/"}>
        <div className="">
          <SiShopify className="text-5xl text-orange-700" />
        </div>
      </Link>
      <div className="flex justify-between items-center space-x-4">
        <form onSubmit={searchHandlar} >
          <input
            type="text"
            className="text-black bg-slate-300 custom-shadow-md text-2xl font-Ubt px-3 w-80 lg:w-72 h-10 rounded outline-none placeholder:text-lg placeholder:font-Ubt focus:outline-2 focus:outline-success"
            placeholder="&#128269; Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <Link to={"/cart"}>
          <div className="relative">
            <HiOutlineShoppingCart className="text-3xl text-orange-700 " />
            <div className="w-6 h-6 rounded-full bg-orange-700 flex justify-center items-center absolute -top-3 -right-3">
              <p className="text-white">{cartItem.length}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
