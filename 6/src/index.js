import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import About from './Pages/About';
import Item from './Pages/Item';
import Error from './Pages/Error';
import Home from './Pages/HomePage/Home';
import './css/index.css';
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
export const DataContext = React.createContext();
function App() {
	const [content, setContents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [input, setInput] = useState('');
	const getData = useCallback(() => {
		setLoading(true);
		setContents([]);
		fetch(url + input)
			.then(res => res.json())
			.then(res => {
				setContents(res.drinks);
				setLoading(false);
			})
			.catch(res => setLoading(false));
	}, [input]);
	useEffect(() => {
		getData()
	  }, [input,getData]);
	return (
		<Router>
			<Nav />
			<DataContext.Provider value={{ loading, content, input, setInput}}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/cocktail/:id' component={Item} />
					<Route path='*' component={Error} />
				</Switch>
			</DataContext.Provider>
		</Router>
	);
}
ReactDom.render(<App />, document.getElementById('root'));