import React, { useState } from 'react';
import data from './cyberData';
import "./cyber.css";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus className="plus" /> : <AiOutlinePlus className="plus" />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};


function Cyber() {
    const [questions, setQuestions] = useState(data);
    return (
        <div className="cyberPage">
            <h2>Cyber security</h2>
            <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
        </div>
    )
}

export default Cyber
