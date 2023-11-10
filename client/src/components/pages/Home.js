import React from "react";
import "../CircleLinks/circle.css";
import NutritionO from '../CircleLinks/NutritionO';
import RecipesO from '../CircleLinks/RecipesO';
import LogO from '../CircleLinks/LogO';
import Header from "../Header/Header";
import FooterBlank from "../Footer/FooterBlank";


function Home() {
    return (
        <>
            <Header />
            <div className="row" style={{
                display: "flex", flexDirection: "row",
                justifyContent: "space-evenly", alignContent: "center",
                textAlign: "center", marginTop: "180px", marginBottom: "180px"
            }}>
                <NutritionO
                    href="/nutrition" />

                <RecipesO
                    href="/recipes" />

                <LogO
                    href="/log" />
            </div>
            <FooterBlank />
        </>
    )
}

export default Home;