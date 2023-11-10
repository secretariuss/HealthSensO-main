import React from 'react';
import { Link } from 'react-router-dom';
import './circle.css';

export default function LogO() {
    return (
      <>
      <Link to ="/log">
      <div className="circle">
        <div className="circleText">Log</div>
      </div>
      </Link>
      </>
    );
    }
    