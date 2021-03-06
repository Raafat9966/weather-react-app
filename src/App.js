import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/search.js";
import ShowInfo from "./components/show-info";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const App = () => {
	const [info, setInfo] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [city, setCity] = useState("berlin");

	useEffect(() => {
		const option = {
			url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
			method: "get",
		};
		const fetchInfo = async () => {
			setIsLoading(true);
			const result = await axios(option);

			console.log(result.data);
			setInfo(result.data);
			setIsLoading(false);
		};
		fetchInfo();
	}, [city]);

	return (
		<div className="App">
			<Search getCity={(city) => setCity(city)} />
			<ShowInfo isLoading={isLoading} info={info} />
		</div>
	);
};

export default App;
