import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import reviews from './data';
import Item from './Item';
function App() {
	const count = reviews.length;
	const [curIndex,setIndex] = useState(0);
	function fixChange(index, amount) {
		setIndex((index + amount + count) % count);
	}
	function randomChange() {
		let temp = Math.round(Math.random() * 100) % count;
		do{
			temp =Math.round(Math.random() * 100) % count;
		}while(temp === curIndex);
		setIndex(temp);
	}
	return <main>
		<section className='container'>
		<div className='title'>
			<h2>Our Reviews</h2>
		<div className='underline'></div>
		</div>
		<Item index={curIndex} fixChange={fixChange} randomChange={randomChange}/>
		</section>
		
		</main>;
}
ReactDom.render(<App />, document.getElementById('root'));