import { useState } from "react";
import {RecipeForm} from "./RecipeForm"
import {RecipeOResult} from "./RecipeOResult"
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function RecipeOC(){
  const [results, setResults] = useState([]);

  return (
    <>
    <Header/>
    <div className="recipeContainer">
      <RecipeForm setResults={setResults}></RecipeForm>
      <RecipeOResult results={results}></RecipeOResult>
    </div>
    <Footer/>
    </>
  );
}
