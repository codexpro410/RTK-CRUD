import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
  // console.log(useSelector((store)=>{console.log(store)}))
  const { cartItems, amount } = useSelector((store) => store.cart);
  console.log(amount);
  return (
    <nav>
      <h3 className="text-white capitalize pb-2">redux toolkit</h3>
      <Link to="/cart" className="btn">
        cart {cartItems.length}
      </Link>
    </nav>
  );
}
