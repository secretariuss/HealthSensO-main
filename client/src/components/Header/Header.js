import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import avatar from './images/avatar.png';
import './header.css';
const logo = require('./images/Owhite2.png');

export default function Header() {
    return (
        <header>
            <Container>
                <Row>
                    <Col className="logout">
                        <a className="logoutText" href="/">Logout</a>
                        </Col>
                    <Col style={{display: "flex", marginTop: "15px", justifyContent: "center", alignItems: "center"}}>
                    <Link to="/home">
                    <img  className="top-logo" src={logo} alt="logo" style={{height: "125px"}}/>
                    </Link>
                    <Avatar className="avatar" src={avatar} alt="default avatar" />
                    </Col>
                    <Col className="help">
                        <a className="helpText" target="_blank" rel="noreferrer" href="https://github.com/Benhwaet/HealthSensO">Help</a>
                        </Col>
                </Row>
            </Container>
        </header>
    )
}