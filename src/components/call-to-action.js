import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ComponentCTA({ children }) {
    return (
            <section class="section" id="call-to-action">
                <Container>
                    <Row>
                        <Col lg={{ span: 10, offset: 1}}>
                            <div class="cta-content dark-bg">
                                <h2>Individual tutoring in <em>person</em> and <em>online</em></h2>
                                <p>Getting help is easier than you think. Our tutors fit your needs and schedule.</p>
                                <div class="scroll-to-section">
                                    <a class="btn btn-primary" href="/#contact-us" role="button">Contact Us</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}