import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./productDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice/cart";
function ProductDetails() {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    await axios
      .get(`https://dummyjson.com/products${location.pathname}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="productDetails-container">
      <img src={product.thumbnail} alt="img" className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price:{product.price}</p>
        <button className="btn" onClick={() => dispatch(addToCart(product))}>
          AddToCart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
