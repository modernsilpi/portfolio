import React from 'react'
import hemanth3 from './navbar/hemanth3.jpg';
import "./portfolio.css";
import { Button, Row, Col } from "react-bootstrap";
import router from "./navbar/router.jpg";
import website from "./navbar/website.jpg";
import hacker from "./navbar/hacker.jpg";

function Portfolio() {
    return (
        <>
        <div className="portfolio" >
            <h1>Hemanth</h1>
            <p>Developer, Pentester.</p>
            <img src={ hemanth3 } alt="hemanth" className="ProfilePic" />
            <div>
                <Button variant="success">Recent Projects </Button>
                <Button style={{marginLeft: "20px"}} variant="success">Contact me</Button>
            </div>
        </div>
        <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
                <Col className="col">
                <div className="Displaycard">
                  <img src={ hacker } alt="Cyber Security" />
                  <h2>Cyber Security</h2>
                </div>
                </Col>
                <Col className="col">
                <div className="Displaycard">
                  <img src={ router } alt="Networking" />
                  <h2>Networking</h2>
                </div>
                </Col>
                <Col className="col">
                <div className="Displaycard">
                  <img src={ website } alt="Web Designing" />
                  <h2>Web Designing</h2>
                </div>
                </Col>
            </Row>
        </section>
        <footer>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Twitter</p>
        </footer>
        </>
    )
}

export default Portfolio
