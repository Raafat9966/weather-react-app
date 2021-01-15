import React, { useState } from "react";

const Search = ({ getCity }) => {
	const [text, setText] = useState("");

	const onChange = (city) => {
		setText(city);
		getCity(city);
	};

	return (
		<section className="search">
			<form>
				<select
					id="city"
					value={text}
					onChange={(e) => onChange(e.target.value)}
				>
					<option value="berlin">Berlin</option>
					<option value="paris">Paris</option>
					<option value="london">London</option>
					<option value="tokyo">Tokyo</option>
					<option value="istanbul">Istanbul</option>
					<option value="aleppo">Aleppo</option>
					<option value="oradea">Oradea</option>
				</select>
			</form>
		</section>
	);
};

export default Search;
