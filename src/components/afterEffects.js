import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./web.css";
import { useHistory } from 'react-router-dom'
import riding from './images/after-effects/Riding-1.m4v';
import spotmies from './images/after-effects/Spotmies Animation-1.m4v';
import userad from './images/after-effects/User Add-1.m4v';
import { IoIosArrowBack } from 'react-icons/io'

function Aftereffects() {
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
    // window.open("https://xd.adobe.com/view/e07d32a6-a83b-42ed-bca6-8ab00aa72d7f-b52e/screen/981c84f1-57a6-425b-b756-3d3660b9fd0a","_blank");
}

const history = useHistory()

    return (
        <div className="webdiv">
            <div className="backBtn" onClick={ history.goBack}>
<IoIosArrowBack className="backIcon"/>
            </div>
            <h1>After Effects</h1>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
            <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <video src={ riding } width="360" height="400" alt="spotmies" controls></video>
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <video src={ spotmies } width="360" height="400" alt="spotmies" controls></video>
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <video src={ userad } width="360" height="400" alt="spotmies" controls></video>
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

export default Aftereffects
