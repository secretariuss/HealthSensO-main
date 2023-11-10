import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './footer.css';

export default function FooterBlank() {
    return (
        <div className="footer">
            <Container>
                <Row>
                   &copy; 2023
                </Row>
            </Container>
        </div>
    )
}