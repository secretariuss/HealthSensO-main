import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterLinks from '../CircleLinks/FooterLinks';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <FooterLinks/>
                </Row>
            </Container>
        </div>
    )
}