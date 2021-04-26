import React from 'react'
import hemanth from './navbar/hemanth.JPG';
import "./portfolio.css";
import { Button } from "react-bootstrap";

function Portfolio() {
    return (
        <div className="portfolio" >
            <h1>Hemanth</h1>
            <p>Developer, Pentester.</p>
            <img src={ hemanth } alt="hemanth" className="ProfilePic" />
            <div>
                <Button variant="success">Recent Projects </Button>
                <Button style={{marginLeft: "20px"}} variant="success">Contact me</Button>
            </div>
        </div>
    )
}

export default Portfolio
