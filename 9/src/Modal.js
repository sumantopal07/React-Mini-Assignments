import React, { useContext } from 'react';
import { DataContext } from './App';
export function Modal({score,completed}) {
    const {  setQuestions } = useContext(DataContext);
    function backToMain(){
        setQuestions([]);
    }
    return (
        <div className="modal-container isOpen">
            <div className="modal-content">
                <h2>congrats!</h2>
                <p>You answered {score}/{completed+1} of questions correctly</p>
                <button className="close-btn" onClick={backToMain}>play again</button>
            </div>
        </div>
    );
}