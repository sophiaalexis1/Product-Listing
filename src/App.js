import { useState } from "react";
import Data from '../src/data/data.json'
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavigationBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CategorySelect from "./Components/CategorySelect/CategorySelect";
import SortToggle from "./Components/SortToggle/SortToggle";
import Pagination from "./Components/Pagination/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [products, setProducts] = useState(Data.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value)); 
    setCurrentPage(1);
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
        
      <div className="drop-down">
        <CategorySelect 
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectedCategory}
        />
        <SortToggle
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />
        </div>
        <div className="items-page">
        <label htmlFor="itemsPerPage">Items per page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={products.length}>All</option>
        </select>
        </div>
      <h1>Product Listing</h1>
      <ProductList 
        products={sortedProducts} 
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <br />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
      <br />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
