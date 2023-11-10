import { useState } from "react";
import {NutrientForm} from "./NutrientForm.js"
import {NutrientOResult} from "./NutrientOResult.js"

export default function NutrientOC(){
  const [results, setResults] = useState([]);

  return (
    <div>
      <NutrientForm setResults={setResults}></NutrientForm>
	  <NutrientOResult results={results}></NutrientOResult>
    </div>
  );
}