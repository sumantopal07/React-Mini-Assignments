import React, { useState } from 'react';
import Item from './Item';
function List(props) {

	const [data, setData] = useState(props.data);
	function handleChange(fetchedId) {
		const newData = data.filter(item => item.id !== fetchedId)
		setData(newData);
	}
	return <>
		{(data.length > 0) && <h2 className='loading'>Our Tours</h2>}
		{(data.length > 0) && <footer className='underline'></footer>}
		{ (data.length === 0) && <h2 className='loading'>No Tours left</h2>}
		{ (data.length === 0) && <center><button onClick={() => setData(props.data)} className='btn'>Refresh</button></center>}
		<ul >
			{(data && data.length > 0) && data.map((item) => { return <li><Item onChange={handleChange} key={item.id} data={item} /></li> })}
		</ul>
	</>
}
export default List;