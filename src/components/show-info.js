import React from "react";

const showInfo = ({ info, isLoading }) => {
	return isLoading ? (
		<p>wait</p>
	) : (
		<div className="container">
			<div className="header">
				<h2>{info.name}</h2>
				<h2>{Math.floor(info.main.temp - 275)}°C</h2>
				<p>{info.weather[0].main}</p>
				<p>{info.weather[0].description}</p>
			</div>
			<div className="coord">
				<p>longitude: {info.coord.lon}°</p>
				<p>latitude: {info.coord.lat}°</p>
			</div>
			<div className="sun">
				<p>Feels like {Math.floor(info.main.feels_like - 275)}</p>
				<p>max temp {Math.floor(info.main.temp_max - 275)}</p>
				<p>min temp {Math.floor(info.main.temp_min - 275)}</p>
			</div>
			<div className="wind">
				<p>humidity {info.main.humidity} rh</p>
				<p>wind speed {info.wind.speed} k/h</p>
			</div>
		</div>
	);
};

export default showInfo;
