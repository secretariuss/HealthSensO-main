import React from 'react';
import { Link } from 'react-router-dom';
import './circle.css';

export default function FooterLinks() {
  return (
    <>
      <Link to="/nutrition">
        <div className="circle-link">
          <div className="circleTextLink">Nutrition</div>
        </div>
      </Link>
      <Link to="/recipes">
        <div className="circle-link">
          <div className="circleTextLink">Recipes</div>
        </div>
      </Link>
      <Link to="/log">
        <div className="circle-link">
          <div className="circleTextLink">Log</div>
        </div>
      </Link>
    </>
  );
}
