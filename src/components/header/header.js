import React from "react";
import { GrCart } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="header">
      <Link to="/" style={{ textDecorationLine: "none" }}>
        <h1 className="h1">Ammazone</h1>
      </Link>
      <div className="nav">
        <Link to="/cart" style={{ textDecorationLine: "none", color: "black" }}>
          <GrCart size={25} />
          <div className="cart-quantity">
            <span>{cart.length}</span>
          </div>
        </Link>
        <CiLogin size={30} />
      </div>
    </div>
  );
}

export default Header;
