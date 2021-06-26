import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Space from './images/2d-art-board/art-boards/2d story board-page-001.jpg';
import dream from './images/2d-art-board/art-boards/story board copy-page-001.jpg';
import onBoard from './images/2d-art-board/on-board-screens/on board screens-page-001.jpg';
import spotmies from './images/2d-art-board/on board screen-page-001.jpg';
import { Row, Col } from 'react-bootstrap';
import "./web.css";


function Art() {
    const history = useHistory()

    const spot = () => {
        // window.open("");
    }

    return (
        <div className="webdiv">
            <h1>Illustrator</h1>
             <div className="backBtn" onClick={ history.goBack}>
<IoIosArrowBack className="backIcon"/>
            </div>
            <section className="cardHolder">
            <Row xs={12} md={12} lg={12} className="row">
            <Col className="col">
               <Link to="/space"><a onClick={spot}><div className="Displaycard">
                  <img src={ Space } alt="space" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a></Link>
                </Col>
                <Col className="col">
<Link to="/dream">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ dream } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a></Link>
                </Col>
                <Col className="col">
              <Link to="/Onboard">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ onBoard } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a></Link>
                </Col>
                <Col className="col">
               <Link to="/spotmiescard">
               <a onClick={spot}><div className="Displaycard">
                  <img src={ spotmies } alt="spotmies" />
                  {/* <h2>24Stream</h2>
                  <p><b>Technologies:</b>Adobe XD</p> */}
                </div></a></Link>
                </Col>
                </Row>
                </section>
        </div>
    )
}

export default Art
