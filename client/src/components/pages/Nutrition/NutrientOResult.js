import React from 'react'
import "./NutrientOResult.css"

export const NutrientOResult = ({results}) => {
	if(Object.keys(results).length > 11){
	return (
		<div className='nutrO'>
			<div className="resO"><div>{results.CA.label}:</div> <div>{results.CA.quantity.toFixed(3)}{results.CA.unit}</div></div>
			<div className="resO"><div>{results.FASAT.label}:</div><div>{results.FASAT.quantity.toFixed(3)}{results.FASAT.unit}</div></div>
			<div className="resO"><div>{results.FATRN.label}:</div><div>{results.FATRN.quantity.toFixed(3)}{results.FATRN.unit}</div></div>
			<div className="resO"><div>{results.CHOLE.label}:</div><div>{results.CHOLE.quantity.toFixed(3)}{results.CHOLE.unit}</div></div>
			<div className="resO"><div>{results.NA.label}:</div><div>{results.NA.quantity.toFixed(3)}{results.NA.unit}</div></div>
			<div className="resO"><div>{results.MG.label}:</div><div>{results.MG.quantity.toFixed(3)}{results.MG.unit}</div></div>
			<div className="resO"><div>{results.K.label}:</div><div>{results.K.quantity.toFixed(3)}{results.K.unit}</div></div>
			<div className="resO"><div>{results.PROCNT.label}:</div><div>{results.PROCNT.quantity.toFixed(3)}{results.PROCNT.unit}</div></div>
			<div className="resO"><div>{results.CHOCDF.label}:</div><div>{results.CHOCDF.quantity.toFixed(3)}{results.CHOCDF.unit}</div></div>
			<div className="resO"><div>{results.VITD.label}:</div><div>{results.VITD.quantity.toFixed(3)}{results.VITD.unit}</div></div>
		</div>
	);
	}
};
