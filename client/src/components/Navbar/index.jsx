import "./navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = ({ toggleClick }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav className="navbar">
      {/** Logo */}
      <div className="navbar__logo">
        <h2>ShopKart</h2>
      </div>

      {/** Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <AiOutlineShoppingCart />
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/** burger menu */}
      <div className="hamburger__menu" onClick={toggleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
