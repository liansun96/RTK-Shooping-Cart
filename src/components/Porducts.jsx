import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./loader/Loader";

const Porducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data)
    setIsLoading(false)
    console.log(data);
  };

  if(isLoading){
    return(
        <Loader/>
    )
  }

  return (
    <div className="w-[1200px] mx-auto flex flex-wrap justify-between gap-5 " >
      {products?.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Porducts;
