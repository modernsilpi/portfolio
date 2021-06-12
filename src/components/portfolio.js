import React, { useRef } from 'react'
import naveen from './navbar/profile.jpg';
import "./portfolio.css";
import { Button, Row, Col } from "react-bootstrap";
import photoshop from "./navbar/photoshop.jpg";
import illustrator from "./navbar/illustrator.jpg";
import afterEffects from "./navbar/after-effects.jpg";
import adobeXD from "./navbar/adobe-xd.jpg";
import { Link } from "react-router-dom";

function Portfolio() {

    const scrollRef = useRef();
    const projRef = useRef();

    const insta = () => {
        window.open("https://www.instagram.com/70956naveen/","_blank");
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
            <h1>Naveen kumar Atava</h1>
            <p>UI Deisgner & Illustrator.</p>
            <img src={ naveen } alt="naveen" className="ProfilePic" /><br />
            <div style={{display: "inline-flex"}}>
                <Button onClick={scrollProj} variant="success">Recent Projects </Button>
              <Button onClick={scrollDown} style={{marginLeft: "20px"}} variant="success">Contact me</Button> 
            </div>
        </div>
        <section ref={projRef} className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
               <Col className="col">
               <Link className="Link" to="/Adobe-xd"><div className="Displaycard">
                  <img src={ adobeXD } alt="Cyber Security" />
                  <h2>UI Design</h2>
                </div></Link>
                </Col>
                <Col className="col">
                <Link className="Link" to="/Illustrator"> <div className="Displaycard">
                  <img src={ illustrator } alt="Networking" />
                  <h2>Illustrator Designs</h2>
                </div></Link>
                </Col>
                {/* <Col className="col">
                <Link className="Link" to="/web-design"><div className="Displaycard">
                  <img src={ website } alt="Web Designing" />
                  <h2>2D Art Story Boards</h2>
                </div></Link>
                </Col> */}
                <Col className="col">
                <Link className="Link" to="/Photoshop"><div className="Displaycard">
                  <img src={ photoshop } alt="Web Designing" />
                  <h2>Photoshop</h2>
                </div></Link>
                </Col>
                <Col className="col">
                <Link className="Link" to="/After-effects"><div className="Displaycard">
                  <img src={ afterEffects } alt="Web Designing" />
                  <h2>After Effects</h2>
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
