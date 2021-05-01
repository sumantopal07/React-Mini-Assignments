import React, {  useEffect,useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Page from './Page';
import Button from './Button';
const url = `https://api.github.com/users/john-smilga/followers?per_page=100`;
export const DataContext = React.createContext();
function Loading() {
	return (
		<div className="section-title">
			<h1>Loading</h1>
			<div className="underline">
			</div>
		</div>
	);
}
function Title() {
	return (
		<div className="section-title">
			<h1>Pagination</h1>
			<div className="underline">
			</div>
		</div>
	);
}
function App() {
	const [content, setContents] = useState([]);
	const [loading, setLoading] = useState(true);
	const [number, setNumber] = useState(0);
	const [pages, setPages] = useState(0);
	useEffect(() => {
		console.log("fetch");
		fetch(url)
			.then(res => res.json())
			.then(res => {
				setContents(res);
				setLoading(false);
				setPages(Math.floor(res.length/10));
			})
			.catch(res => setLoading(false));
	}, []);
	return (
		<main>
			<section className="followers">
				<DataContext.Provider value={{ content, loading, number, setNumber, pages }}>
					{loading && <Loading />}
					{!loading && (<><Title /><Page /> <Button /></>)}
				</DataContext.Provider>
			</section>
		</main>
	);
}
ReactDom.render(<App />, document.getElementById('root'));