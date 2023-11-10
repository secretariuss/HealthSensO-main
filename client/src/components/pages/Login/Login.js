import React from "react";
import logo from "./O.png";
import "./login.css"
import { useNavigate } from "react-router-dom";
import HeaderBlank from "../../Header/HeaderBlank";
import FooterBlank from "../../Footer/FooterBlank";


export default function Login() {
    const navigate = useNavigate();
    const loginClick = () => navigate("/login");
    const registerClick = () => navigate("/register");

    return (
        <>
        <HeaderBlank />
            <div className="main" >
                <div className="circle" onClick={registerClick}>
                    <h2 className="circleText" >
                        Register
                    </h2>
                </div>
                <img style={{ height: '500px', width: '500px' }} src={logo} alt="center page logo" />
                <div className="circle" onClick={loginClick}>
                    <h2 className="circleText">
                        Login
                    </h2>
                </div>
            </div>
            <FooterBlank />
        </>
    )
}