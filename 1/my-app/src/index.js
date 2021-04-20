import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import data from './data';
import Box from './Box';

function App() {
	return <main><section className = 'container'><Box component={data}/></section></main>;
}
ReactDom.render(<App />, document.getElementById('root'));