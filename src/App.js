import "./App.css";
import Header from "./components/header/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Productlist from "./components/productlists/productlist";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/productDetails/productDetails";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";

function App() {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Productlist product={product} />} />
        <Route path=":id" element={<ProductDetails product={product} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
