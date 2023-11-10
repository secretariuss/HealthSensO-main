import React, { useState } from "react";
import { Row } from 'react-bootstrap';
import serving from './images/servings0.png';
import './ServingCounter.css'

export default function ServingCounter() {

    let [countVeg, setCountVeg] = useState(0);
    let [countFruit, setCountFruit] = useState(0);
    let [countGrain, setCountGrain] = useState(0);
    let [countMeat, setCountMeat] = useState(0);
    let [countSweet, setCountSweet] = useState(0);
    let [countFat, setCountFat] = useState(0);
    let [countDairy, setCountDairy] = useState(0);


    const handleClickVeg = () => {
        setCountVeg((countVeg + 1));
    }

    const handleClickFruit = () => {
        setCountFruit((countFruit + 1));
    }

    const handleClickGrain = () => {
        setCountGrain((countGrain + 1));
    }

    const handleClickMeat = () => {
        setCountMeat((countMeat + 1));
    }

    const handleClickSweet = () => {
        setCountSweet((countSweet + 1));
    }

    const handleClickFat = () => {
        setCountFat((countFat + 1));
    }

    const handleClickDairy = () => {
        setCountDairy((countDairy + 1));
    }

    return (
        <>
            <div className="servingPage">
                <Row className="rowSection">
                    <div className="column">
                        <div className="buttonGroupTop">
                            <button className="serving-amount" onClick={handleClickVeg}>veggie:{countVeg}</button>
                            <button className="serving-amount" onClick={handleClickFruit}>fruit:{countFruit}</button>
                            <button className="serving-amount" onClick={handleClickGrain}>grain:{countGrain}</button>
                            <button className="serving-amount" onClick={handleClickMeat}>meat:{countMeat}</button>
                        </div>
                        <img className="food group servings" style={{ height: '450px', width: '450px' }}
                            src={serving} alt="servings on plate" />
                        <div className="buttonGroupBottom">
                            <button className="serving-amount" onClick={handleClickSweet}>sweet:{countSweet}</button>
                            <button className="serving-amount" onClick={handleClickFat}>fat:{countFat}</button>
                            <button className="serving-amount" onClick={handleClickDairy}>dairy:{countDairy}</button>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    )
}