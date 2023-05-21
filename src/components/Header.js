import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { cartContext } from "../Context";

const Header = () => {
  const { cart } = useContext(cartContext);
  return (
    <div>
      <span className="header">React Tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
