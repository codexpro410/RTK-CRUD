/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { addItemToCart } from "../Redux/cartSlice"

export default function CartItem({id, image, title, price}) {
  const dispatch = useDispatch()
  const addItemHandler = ()=>{
    const item = {id, image, title, price}
    dispatch(addItemToCart(item))
  }
  return (
    <div className="text-white flex items-center justify-between gap-2">
      <div className=" flex items-center gap-2">
      <img src={image} alt="" width={50} className="mb-2"/>
      <p>{title}</p>

      </div>
      <div className="flex items-center gap-2">
      <p>${price}</p>
      <button className="text-black" onClick={addItemHandler}>add to cart</button>
      </div>
    </div>
  )
}
