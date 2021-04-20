import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import List from './List'
const url = 'https://course-api.com/react-tours-project'
function App() {
    const [data,setData] = useState([]);
    fetch(url).then(res => res.json()).then(res => setData(res));
	return <main>
		{(data.length ==0 ) && <h1 className='loading'>Loading..</h1>}
		{(data.length > 0) && <List data={data} />}
        </main>
}
ReactDom.render(<App />, document.getElementById('root'));