import React, { useContext } from 'react';
import { DataContext } from './App';
const Form = () => {
    const { amount, setAmount, setDifficulty, setCategory, fetchData} = useContext(DataContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }
    function handleDifficulty(event) {
        setDifficulty(event.target.value);
    }
    function handleCategory(event) {
        setCategory(event.target.value);
    }
    function handleAmount(event) {
        setAmount(event.target.value);
    }
    return (
        <section className="quiz quiz-small">
            <form className="setup-form" onSubmit={handleSubmit}>
                <h2>setup quiz</h2>
                <div className="form-control">
                    <label htmlFor="amount">number of questions</label>
                    <input type="number" name="amount" id="amount" className="form-input" min="1" max="50" value={amount} onChange={handleAmount}/>
                </div>
                <div className="form-control">
                    <label htmlFor="category">category</label>
                    <select name="category" id="category" className="form-input" onChange={handleCategory}>
                        <option value="sports">sports</option>
                        <option value="history">history</option>
                        <option value="politics">politics</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="difficulty">select difficulty</label>
                    <select name="difficulty" id="difficulty" className="form-input" onChange={handleDifficulty}>
                        <option value="easy" >easy</option>
                        <option value="medium" >medium</option>
                        <option value="hard" >hard</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">start</button>
            </form>
        </section>
    );
};

export default Form;