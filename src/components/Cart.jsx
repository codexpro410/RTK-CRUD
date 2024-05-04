import { useDispatch, useSelector } from 'react-redux'; // Step 1: Import useSelector
import { Link } from 'react-router-dom';
import { clearItems, clearOneItem, increaseAmount, decreaseAmount } from '../Redux/cartSlice'; 
export default function Cart() {
  // Step 2: Use useSelector to get cart items from the store
  const {cartItems, total} = useSelector((state) => state.cart);


  const dispatch = useDispatch();
  return (
    <div className="cart text-white">
      <h1>Cart</h1>
      {/* Step 3: Map over the cart items and display them */}
      <div>
        {cartItems.map((item) => {

            return(
          <div key={item.id} className="flex justify-between items-center gap-4">
            <img src={item.image} alt={item.title} width="50" />
              <p>{item.title}</p>
            <div className='flex items-center gap-4'>
              <p>Quantity: {item.amount}</p>
              <p className="cursor-pointer" onClick={()=>dispatch(increaseAmount(item.id))}>^</p>
              <p className='transform-90 cursor-pointer' onClick={()=>dispatch(decreaseAmount(item.id))}>^</p>
              <p>Price: ${item.price}</p>
              <p>total: ${item.subtotal} </p>
              <button className='btn' onClick={()=>dispatch(clearOneItem(item.id))}>clear</button>
            </div>
          </div>

            )
})}
      </div>
      <div className='flex justify-between pb-5'>
        <h5>total: </h5>
      <p>${total}</p>
      </div>
      <div className="flex gap-4 ">
        <button className='btn' onClick={()=>dispatch(clearItems())} >clear cart</button>
        <Link to="/" className="btn">back to store</Link>
      </div>
    </div>
  );
}