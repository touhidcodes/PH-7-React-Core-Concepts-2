import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const products = [
		{ name: "Laptop", price: 57000 },
		{ name: "Phone", price: 50000 },
		{ name: "Watch", price: 7000 },
		{ name: "Pad", price: 15000 },
		{ name: "Google Fit", price: 10000 },
		{ name: "Books", price: 600 },
		{ name: "Soap", price: 60 },
	];

	return (
		<div className='App'>
			{products.map((product) => (
				<Product name={product.name} price={product.price}></Product>
			))}
			{/* <Product name={"Laptop"} price={2300}></Product>
			<Product name={"Phone"} price={2000}></Product> */}
		</div>
	);
}

function Product(props) {
	return (
		<div className='product'>
			<h3>Name: {props.name}</h3>
			<p>Price: {props.price}</p>
		</div>
	);
}

export default App;
