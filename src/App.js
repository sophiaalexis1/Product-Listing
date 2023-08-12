import { useState } from "react";
import Data from '../src/data/data.json'
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavigationBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CategorySelect from "./Components/CategorySelect/CategorySelect";
import SortToggle from "./Components/SortToggle/SortToggle";

const App = () => {
  const [products, setProducts] = useState(Data.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products; 

  let sortedProducts = [...filteredProducts];
  
  if (sortOrder === "asc") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "desc") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

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
      <SortToggle
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />
      <ProductList products={sortedProducts} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
