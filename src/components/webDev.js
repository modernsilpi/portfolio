import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./web.css";
import lettude from './navbar/lettude.jpeg';
import cameraRentals from './navbar/cameraRentals.PNG';
import modernsilpi from './navbar/modernsilpi.PNG';

function Webdev() {
const lettud = () => {
    window.open("http://www.lettude.com",'_blank');
}

const ms = () => {
    window.open("https://www.modernsilpi.com","_blank");
}

const dslr = () => {
    window.open("https://www.dslr4rent.com","_blank");
}

    return (
        <div className="webdiv">
            <h1>Web development</h1>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
               <Col className="col">
               <a onClick={ms}><div className="Displaycard">
                  <img src={ modernsilpi } alt="Cyber Security" />
                  <h2>Modern Silpi</h2>
                  <p><b>Technologies:</b> Bootstrap, Html, Css, Js, jQuery</p>
                </div></a>
                </Col>
                <Col className="col">
                <a onClick={dslr}> <div className="Displaycard">
                  <img src={ cameraRentals } alt="Networking" />
                  <h2>dslr4rent</h2>
                  <p><b>Technologies:</b> Javascript, Html, Css, jQuery, Firebase, Bootstrap</p>
                </div></a>
                </Col>
                <Col className="col">
                <a onClick={lettud}><div className="Displaycard">
                  <img src={ lettude } alt="Web Designing" />
                  <h2>Lettude</h2>
                  <p><b>Technologies:</b> Html, Css, Bootstrap, Js, jQuery, Node.js, Mongodb</p>
                </div></a>
                </Col>
            </Row>
        </section>
        </div>
    )
}

export default Webdev
