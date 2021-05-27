import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./web.css";
import { useHistory } from 'react-router-dom'
import lettude from './navbar/lettude.jpeg';
import cameraRentals from './navbar/cameraRentals.PNG';
import modernsilpi from './navbar/modernsilpi.PNG';
import spotmies from './navbar/spotmies.PNG'
import { IoIosArrowBack } from 'react-icons/io'

function Webdev() {
const lettud = () => {
    window.open("http://lettude.com",'_blank');
}

const ms = () => {
    window.open("https://modernsilpi.com","_blank");
}

const dslr = () => {
    window.open("https://dslr4rent.com","_blank");
}

const spot = () => {
    window.open("https://spotmies.com/#/","_blank");
}

const history = useHistory()

    return (
        <div className="webdiv">
            <div className="backBtn" onClick={ history.goBack}>
<IoIosArrowBack className="backIcon"/>
            </div>
            <h1>Web development</h1>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
            <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ spotmies } alt="spotmies" />
                  <h2>Spotmies</h2>
                  <p><b>Technologies:</b>React.js, Css, Js</p>
                </div></a>
                </Col>
               <Col className="col">
               <a onClick={ms}><div className="Displaycard">
                  <img src={ modernsilpi } alt="modern silpi" />
                  <h2>Modern Silpi</h2>
                  <p><b>Technologies:</b> Bootstrap, Html, Css, Js, jQuery</p>
                </div></a>
                </Col>
                <Col className="col">
                <a onClick={dslr}> <div className="Displaycard">
                  <img src={ cameraRentals } alt="dsrl4rents" />
                  <h2>dslr4rent</h2>
                  <p><b>Technologies:</b> Javascript, Html, Css, jQuery, Firebase, Bootstrap</p>
                </div></a>
                </Col>
                <Col className="col">
                <a onClick={lettud}><div className="Displaycard">
                  <img src={ lettude } alt="lettude" />
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
