import { useState } from "react";
import Data from '../src/data/data.json'
import "./App.css";
import Product from './Components/Product/Product'
import ProductList from "./Components/ProductList/ProductList";
import NavigationBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [products, setProducts] = useState(Data.products);
  
  return (
    <div>
      <NavigationBar/>
      <div className="app">
        <h1>Product Listing</h1>
      <ProductList products={products} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
