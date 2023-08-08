import { useState } from "react";
import "./App.css";
import data from './data/data.json';

function App() {
  console.log(data);
  const [allProducts, setAllProducts] = useState(data)
  return (
    <div>
      <h1>Hello, Student!</h1>
    </div>
  );
}

export default App;
