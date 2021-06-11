import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./web.css";
import { useHistory } from 'react-router-dom'
import comp from './images/photoshop/Comp 1_00000.png';
import ghost from './images/photoshop/ghost1.png';
import gym from './images/photoshop/gym.png';
import building from './images/photoshop/man buliding.png';
import hair from './images/photoshop/man with hair.png';
import man from './images/photoshop/man.png';
import nature from './images/photoshop/nature1.png';
import city from './images/photoshop/night city.png';
import proposal from './images/photoshop/proposal.png';
import one from './images/photoshop/one.png'
import { IoIosArrowBack } from 'react-icons/io'

function Photoshop() {
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
            <h1>Photoshop</h1>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
            <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ nature } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ hair } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ ghost } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ comp } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ building } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ man } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ city } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ one } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
                <Col className="col">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ proposal } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a>
                </Col>
               
            </Row>
        </section>
        </div>
    )
}

export default Photoshop
