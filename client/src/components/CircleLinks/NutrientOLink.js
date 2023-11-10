import React from 'react';
import { Link } from 'react-router-dom';
import kcal from '../Counters/images/servings.png';
import './circle.css';

export default function NutrientOLink() {
  return (
    <Link to="/nutrient">
      <div className="circle-link">
        <div className="circleTextLink">
          <img className="circleImg" src={kcal} alt="kcal" />
          <p className="circleP">Nutrients</p>
        </div>
      </div>
    </Link>
  );
}