import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './header.css';

export default function HeaderBlank() {
    return (
        <header>
            <Container>
                <Row>
                    <Col className="help">
                        <a className="helpText" target="_blank" rel="noreferrer" href="https://github.com/Benhwaet/HealthSensO">Help</a>
                        </Col>
                </Row>
            </Container>
        </header>
    )
}