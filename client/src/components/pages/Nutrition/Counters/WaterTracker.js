import React from "react";
import water from "./images/Water.png";
import "./ServingCounter.css";

export default function WaterTracker() {
    <>
        <div className="column waterServing">
            <div class="progress progress-bar-vertical">
                <div class="progress-bar progress-bar-striped active" role="progressbar"
                    aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
            <img className="glass" src={water} alt="water glass" />
        </div>
    </>
}