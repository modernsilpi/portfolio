import React, { useRef } from 'react'
import hemanth3 from './navbar/hemanth3.jpg';
import "./portfolio.css";
import { Button, Row, Col } from "react-bootstrap";
import router from "./navbar/router.jpg";
import website from "./navbar/website.jpg";
import hacker from "./navbar/hacker.jpg";
import { Link } from "react-router-dom";

function Portfolio() {

    const scrollRef = useRef();
    const projRef = useRef();

    const insta = () => {
        window.open("https://www.instagram.com/hemanth_vickey/","_blank");
    }

    const linkd = () => {
        window.open("https://in.linkedin.com/in/hemanth-kumar-veeranala-967ba318a","_blank");
    }

    const fb = () => {
        window.open("https://www.facebook.com/profile.php?id=100008232940342","_blank");
    }

    const scrollDown = () => {
        scrollRef.current.scrollIntoView({behavior: "smooth"})
    }

    const scrollProj = () => {
projRef.current.scrollIntoView({behavior: "smooth"})
    }

    return (
        <>
        <div className="portfolio" >
            <h1>Hemanth</h1>
            <p>Web Developer, Web Application Pentester.</p>
            <img src={ hemanth3 } alt="hemanth" className="ProfilePic" />
            <div style={{display: "inline-flex"}}>
                <Button onClick={scrollProj} variant="success">Recent Projects </Button>
              <Button onClick={scrollDown} style={{marginLeft: "20px"}} variant="success">Contact me</Button> 
            </div>
        </div>
        <section ref={projRef} className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
               <Col className="col">
               <Link className="Link" to="/cyber-security"><div className="Displaycard">
                  <img src={ hacker } alt="Cyber Security" />
                  <h2>Cyber Security</h2>
                </div></Link>
                </Col>
                <Col className="col">
                <Link className="Link" to="/networks"> <div className="Displaycard">
                  <img src={ router } alt="Networking" />
                  <h2>Networking</h2>
                </div></Link>
                </Col>
                <Col className="col">
                <Link className="Link" to="/web-design"><div className="Displaycard">
                  <img src={ website } alt="Web Designing" />
                  <h2>Web Designing</h2>
                </div></Link>
                </Col>
            </Row>
        </section>
        <section className="about-me">
            <h2>About me</h2>
            <p>I am a cyber security enthusiast and a web designer. My friends and I founded a startup called modern silpi. I have 2 years experience in html, css, javascript and jquery and 4 months experience in React.js. I spend half of my day learning and practising cyber security concepts. My goal is to crack OSCP within next 4 years.</p>
        </section>
        <footer ref={scrollRef}>
           <a onClick={ insta }><p>Instagram</p></a>
           <a onClick={ linkd }><p>LinkedIn</p></a>
           <a onclick={ fb } ><p>Facebook</p></a>
        </footer>
        </>
    )
}

export default Portfolio
