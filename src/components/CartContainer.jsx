import axios  from 'axios'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
export default function CartContainer() {
    const URL = "https://fakestoreapi.com/products"
const [products, setProducts] = useState([])
useEffect(() => {
  axios.get(URL).then(res => setProducts(res.data))
}, [])


console.log(products)
  
    return (
    <div className='text-white'>
        <h1>Your Bag</h1>
        {
            products.slice(1,5).map(product => (
                <div className="" key={product.id}>
                <CartItem key={product.id} {...product}/>
                </div>
            ))
        }
    </div>
  )
}
