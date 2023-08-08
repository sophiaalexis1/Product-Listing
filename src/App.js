import { useState } from "react";
import "./App.css";
import data from './data/data.json';
import NavigationBar from "./Components/NavBar/NavBar";

function App() {
  console.log(data);
  const [allProducts, setAllProducts] = useState(data)
  return (
    <div>
      <NavigationBar/>
    </div>
  );
}

export default App;
