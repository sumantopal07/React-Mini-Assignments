import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import reviews from './data';
function App() {
	const count = reviews.length;
	function fixChange(index, amount) {
		index = (index + amount + count) % count;
	}
	function randomChange(index, amount) {
		index = Math.round(Math.random() * 100) % count;
	}
	return <main>
		<h1 className='title'>Our Reviews</h1>
		
	</main>;
}
ReactDom.render(<App />, document.getElementById('root'));