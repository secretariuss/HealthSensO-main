import React from 'react';
import { Link } from 'react-router-dom';
import './circle.css';


export default function NutritionO() {
    return (
      <Link to ="/nutrition">
      <div className="circle">
        <div className="circleText">Nutrition</div>
      </div>
      </Link>
    );
  }