import React from "react";
import "./productlist.css";
import Card from "../card/card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice/cart";

function Productlist({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="productList">
      {product?.map((item) => (
        <Card
          key={item.id}
          navigate={() => navigate(`${item.id}`)}
          name={item.title}
          img={item.thumbnail}
          btn={() => dispatch(addToCart(item))}
        />
      ))}
    </div>
  );
}

export default Productlist;
