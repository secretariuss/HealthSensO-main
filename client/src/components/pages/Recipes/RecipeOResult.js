import React from 'react'
import './RecipeOResult.css'

export const RecipeOResult = ({results}) => {
	return (
		<div className='listArrange'>
			{
				results.map((result, id) =>{
					return (
					<div key={id}>
			{/* We can use ```target="_blank" rel="noopener"``` in the anchor to open in new tab */}
						<a href={result.recipe.url} target="_blank" rel="noreferrer"><img src={result.recipe.image} alt="recipe"></img></a>
					</div>
					);
				})
			}
		</div>
	);
};

