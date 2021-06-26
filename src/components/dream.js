import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./web.css";
import { useHistory, Link } from 'react-router-dom'
import dream1 from './images/2d-art-board/art-boards/story board copy-page-001.jpg';
import dream2 from './images/2d-art-board/art-boards/story board copy-page-002.jpg';
import dream3 from './images/2d-art-board/art-boards/story board copy-page-003.jpg';
import dream4 from './images/2d-art-board/art-boards/story board copy-page-004.jpg';

import { IoIosArrowBack } from 'react-icons/io'

function Dream() {
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
    // window.open("");
}

const history = useHistory()

    return (
        <div className="webdiv">
            <div className="backBtn" onClick={ history.goBack}>
<IoIosArrowBack className="backIcon"/>
            </div>
            <h1>Dream</h1>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
            {/* <Col className="col">
                <Link className="Link" to="/"><div className="Displaycard">
                  <img src={ photoshop } alt="2D Story Board" />
                  <h2>2D Story Board</h2>
                </div></Link>
                </Col> */}
              
            <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ dream1 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ dream2 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ dream3 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ dream4 } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                
               
               {/* <Col className="col">
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
                </Col> */}
            </Row>
        </section>
        </div>
    )
}

export default Dream
