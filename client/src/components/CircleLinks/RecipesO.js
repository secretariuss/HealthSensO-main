import React from 'react';
import { Link } from 'react-router-dom';
import './circle.css';

export default function RecipesO(){
    return (
      <Link to ="/recipes">
      <div className="circle">
        <div className="circleText">Recipes</div>
      </div>
      </Link>
    );
    }