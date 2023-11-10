import React from 'react';
import { Row } from 'react-bootstrap';
import NutrientOC from './NutrientOC';
import ServingCounter from './Counters/ServingCounter';
import water from "./Counters/images/Water.png";
import "./Counters/ServingCounter.css";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Nutrition() {
    return (
        <div>
            <Header />
            <Row className="nutrition-container">
                <div>
                    <h2>Daily Servings</h2>
                    <ServingCounter />
                </div>
                <div>
                    <NutrientOC />
                </div>
                <div className="waterServing">
                    <div className="column">
                        <div class="progress progress-bar-vertical">
                            <div class="progress-bar progress-bar-striped active" role="progressbar"
                                aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                        <img className="glass" src={water} alt="water glass" />
                    </div>
                    <button className="waterButton">Add Water</button>
                </div>
            </Row>
            <Footer />
        </div>
    )
}