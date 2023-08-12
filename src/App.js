import { useState } from "react";
import Data from '../src/data/data.json'
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavigationBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CategorySelect from "./Components/CategorySelect/CategorySelect";

const App = () => {
  const [products, setProducts] = useState(Data.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products; 

  return (
    <div>
      <NavigationBar/>
      <div className="app">
        <h1>Product Listing</h1>
      <CategorySelect 
        products={products}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectedCategory}
      />
      <ProductList products={filteredProducts} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
