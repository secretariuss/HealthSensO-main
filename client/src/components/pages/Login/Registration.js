import React from "react";
import RegisterForm from "../../forms/RegisterForm";
import logo from "./O.png";
import "./login.css"
import { useNavigate } from "react-router-dom";
import HeaderBlank from "../../Header/HeaderBlank";
import FooterBlank from "../../Footer/FooterBlank";


export default function Register() {
    const navigate = useNavigate();
    const loginClick = () => navigate("/login");

    return (
        <>
            <HeaderBlank />
            <div className="main" >
                <div className="circle">

                    <RegisterForm />

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