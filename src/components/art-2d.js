import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import "./web.css";


function Art() {
    const history = useHistory()

    return (
        <div className="webdiv">
            <h1>Illustrator</h1>
             <div className="backBtn" onClick={ history.goBack}>
<IoIosArrowBack className="backIcon"/>
            </div>
        </div>
    )
}

export default Art
