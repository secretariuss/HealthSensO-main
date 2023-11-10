import React, {useState} from 'react';
import "../Recipes/RecipeForm.css";


export const NutrientForm = ({setResults}) => {
	const [input, setInput] = useState("");

	const fetchData = (value) => {
		fetch("https://api.edamam.com/api/nutrition-data?app_id=4d699393&app_key=b8b997d55649510fba6506d056b822c2&nutrition-type=cooking&ingr="+value)
		.then((response) => response.json())
		.then((json) => {
			const results = json;
			if(Object.keys(results).length > 11){
			setResults(results.totalNutrients);
			console.log(results.totalNutrients);
		}
			console.log(Object.keys(results).length);
		}); 
	}

	const handleChange = (value) => {
		setInput(value)
		fetchData(value)
	}

	return (
		<div className='vert'>
			<h1>Nutrition</h1>
			<input className='searchBar' placeholder='Enter ingredient with quantity... (ex. 10g potato)' value={input} onChange={(e) => handleChange(e.target.value)}></input>
		</div>
	);
};