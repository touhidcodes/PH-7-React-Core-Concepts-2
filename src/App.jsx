import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Counter></Counter>
			<ExternalUsers></ExternalUsers>
		</div>
	);
}

function ExternalUsers() {
	// useEffect load data and keep data into the state, so the initial data should be an empty array
	const [users, setUsers] = useState([]);

	// Load data using useEffect, to prevent loop of effect set dependency by []
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			// .then((data) => console.log(data));
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h2>External Users: {users.name}</h2>
			{users.map((user) => (
				<User
					name={user.name}
					email={user.email}
					address={user.address.city}
					phone={user.phone}
				></User>
			))}
		</div>
	);
}

function User(props) {
	return (
		<div className="user">
			<h2>{props.name}</h2>
			<p>Email: {props.email}</p>
			<p>Phone: {props.phone}</p>
			<p>Address: {props.address}</p>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const increaseCount = () => {
		const newCount = setCount(count + 1);
	};

	const decreaseCount = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increaseCount}>Increase</button>
			<button onClick={decreaseCount}>Decrease</button>
		</div>
	);
}

export default App;

// const products = [
// 		{ name: "Laptop", price: 57000 },
// 		{ name: "Phone", price: 50000 },
// 		{ name: "Watch", price: 7000 },
// 		{ name: "Pad", price: 15000 },
// 		{ name: "Google Fit", price: 10000 },
// 		{ name: "Books", price: 600 },
// 		{ name: "Soap", price: 60 },
// 	];

// 	return (
// 		<div className='App'>
// 			{products.map((product) => (
// 				<Product name={product.name} price={product.price}></Product>
// 			))}
// 			{/* <Product name={"Laptop"} price={2300}></Product>
// 			<Product name={"Phone"} price={2000}></Product> */}
// 		</div>
// 	);
// }

// function Product(props) {
// 	return (
// 		<div className='product'>
// 			<h3>Name: {props.name}</h3>
// 			<p>Price: {props.price}</p>
// 		</div>
// 	);
// }
