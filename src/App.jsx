import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return <div className='App'>
<Product></Product>
  </div>;
}

function Product(props){
  return (
    <div>
      <h3>Name: </h3>
      <p>Price: </p>
    </div>
  )
}

export default App;
