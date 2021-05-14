import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import Question from './Question';
export const DataContext = React.createContext();
const type = 'multiple';
const URL = 'https://opentdb.com/api.php';
function App() {
	const [amount, setAmount] = useState(10);
	const [difficulty, setDifficulty] = useState('easy');
	const [category, setCategory] = useState('sports');
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(false);
	const fx = () => {
		if (category === 'sports') return 21;
		if (category === 'history') return 23;
		if (category === 'politics') return 24;
	}
	const fetchData = () => {
		setLoading(true);
		axios.get(URL, {
			params: {
				amount: amount,
				difficulty: difficulty,
				category: fx(),
				type: type
			}
		}).then(res => {
			setLoading(false);
			console.log(res.data.results);
				setQuestions(res.data.results);
			});
	}
	return (
		<main>
			<DataContext.Provider value={{ amount, setAmount, difficulty, setDifficulty, category, setCategory, fetchData, questions, setQuestions }}>
				{questions.length === 0 && loading===false && <Form />}
				{loading===true  && <div className='loading'></div>}
				{questions.length > 0 && <Question />}
			</DataContext.Provider>
		</main>
	);
}


export default App;
