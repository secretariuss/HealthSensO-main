import React, {useState} from 'react';
import './RecipeForm.css';

export const RecipeForm = ({setResults}) => {
	const [input, setInput] = useState("");

	const fetchData = (value) => {
		fetch("https://api.edamam.com/api/recipes/v2?type=public&q="+value+"&app_id=030dc0e8&app_key=2501f7c2e61eba8feab215eb3a9aef83")
		.then((response) => response.json())
		.then((json) => {
			const results = json;
			setResults(results.hits);
			console.log(results.hits);
		}); 
	}

	const handleChange = (value) => {
		setInput(value)
		fetchData(value)
	}

	return (
		<div className='horiz'>
			<div className='vert'>
				<h1>Recipes</h1>
				<input className='searchBar' placeholder='Search for Recipe...' value={input} onChange={(e) => handleChange(e.target.value)}></input>
			</div>
		</div>
	);
};