import { useState } from "react";
import "./App.css";
import data from './data/data.json';
import NavigationBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  console.log(data);
  const [allProducts, setAllProducts] = useState(data)
  return (
    <div>
      <NavigationBar/>
      <Footer/>
    </div>
  );
}

export default App;
