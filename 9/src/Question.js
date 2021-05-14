import React, { useContext, useEffect, useState, useCallback } from 'react';
import { DataContext } from './App';
import { Modal } from './Modal';
export default function Question() {
    const { questions } = useContext(DataContext);
    const [displayModal, setDisplayModal] = useState(false);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [options, setOptions] = useState([]);
    const answered = (choice) => {
        setScore(prev => (choice === "right") ? (prev + 1) : prev);
        if (completed + 1 !== questions.length)
            setCompleted(prev => prev + 1);
        if (completed + 1 === questions.length)
            setDisplayModal(true);
    }
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    useEffect(() => {
        setOptions(() => {
            const ar = [];
            ar.push(<button className="answer-btn" onClick={() => answered("right")}>{questions[completed].correct_answer}</button>);
            ar.push(<button className="answer-btn" onClick={() => answered("wrong")}>{questions[completed].incorrect_answers[0]}</button>);
            ar.push(<button className="answer-btn" onClick={() => answered("wrong")}>{questions[completed].incorrect_answers[1]}</button>);
            ar.push(<button className="answer-btn" onClick={() => answered("wrong")}>{questions[completed].incorrect_answers[2]}</button>);
            shuffle(ar);
            return ar;
        });
    }, [completed]);
    return (
        <>
            {displayModal === true && <Modal score={score} completed={completed} />}
            <section className="quiz">
                <p className="correct-answers">correct answers : {score}/{completed}</p>
                <article className="container">
                    <h2>{questions[completed].question}</h2>
                    <div className="btn-container">
                        {options.map(i => i)}
                    </div>
                </article>
                <button className="next-question" onClick={() => answered("wrong")}>next question</button>
            </section>
        </>
    );
}