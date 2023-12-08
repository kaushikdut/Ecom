import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../store/slices/cartSlice/cart";
import emptyCart from "../../assets/empty_cart.png";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.length > 0 ? (
        <table className="table">
          <tr>
            <th className="table-head">Product</th>
            <th className="table-head">Title</th>
            <th className="table-head">Quantity</th>
          </tr>
          {cart.map((ele) => (
            <tr key={ele.id} className="table-row">
              <td>
                <img
                  src={ele.thumbnail}
                  className="cart-image"
                  alt={ele?.title}
                />
              </td>
              <td className="title">{ele.title}</td>
              <td className="quantity">1</td>
              <MdDelete
                onClick={() => dispatch(removeFromCart(ele))}
                size={40}
                cursor={"pointer"}
              />
            </tr>
          ))}
        </table>
      ) : (
        <img src={emptyCart} alt="img" className="empty-cart" />
      )}
    </div>
  );
}

export default Cart;
