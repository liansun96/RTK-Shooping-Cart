import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/services/cartSlice'


const Product = (props) => {

    const {id,price,title,description,image} = props 

    const dispatch = useDispatch()

  return (
    <div className="group hover:custom-shadow-md w-[270px] h-[350px] bg-white border flex flex-col space-y-2 justify-center items-center rounded ">
      <img
        src={image}
        className="group-hover:scale-95 group-hover:-rotate-6 duration-150 w-[200px] h-[200px] object-scale-down  -top-10 -left-10"
        alt=""
      />
      <h3 className="text-lg font-semibold">
        {/* {`${title.substring(0,40)} ....`} */}
        {title.length > 20 ? `${title.substring(0, 20)} ...` : title}
      </h3>
      <h1 className="text-lg font-bold">$ {price}</h1>
      <div className="space-x-5">
        <button
          onClick={()=>dispatch(addToCart(props))}
          className="bg-lime-500 duration-200 hover:bg-lime-400 hover:scale-105 text-light px-3 py-2 rounded text-sm"
        >
          Add to Cart
        </button>
        <button className="bg-sky-500 duration-200  hover:bg-sky-400 hover:scale-105 text-light px-3 py-2 rounded text-sm">
          View Detail
        </button>
      </div>
    </div>
  )
}

export default Product