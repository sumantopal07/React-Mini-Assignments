import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Page from './Page';
const url = `https://api.unsplash.com/photos/?client_id=1353zqJ8F1BOikw3gFk7dQdoAtWFgKPspTD5HCYmg4o&page=`;
const queryUrl = `https://api.unsplash.com/search/photos/?client_id=1353zqJ8F1BOikw3gFk7dQdoAtWFgKPspTD5HCYmg4o&page=`;
export const DataContext = React.createContext();
function Button() {
	const { setQuery, setPage } = useContext(DataContext);
	const val = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery(() => {
			setPage(1);
			return val.current.value
		});

	}
	return (
		<section className='search' onSubmit={handleSubmit}>
			<form className="search-form">
				<input type="text" placeholder="search" className="form-input" ref={val} />
				<button type="submit" className="submit-btn" />
			</form>
		</section>
	);
}
function App() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const fetchData = useCallback(() => {
		setLoading(true);
		if (query.length > 0) {
			fetch(queryUrl + page.toString() + "&query=" + query)
				.then(res => res.json())
				.then(res => {
					if (page === 1) {
						setData((prev) => res.results);
						console.log(res.results);
					}
					else {
						let info;
						setData((prev) => {
							info = [...prev, ...res.results];
							return [...prev, ...res.results];
						});
						console.log(info);
					}
					setLoading(false);
				})
				.catch(res => setLoading(false));
		}
		else {
			fetch(url + page.toString())
				.then(res => res.json())
				.then(res => {
					setData((prev) => [...prev, ...res]);
					setLoading(false);
				})
				.catch(res => setLoading(false));
		}
	}, [query, page]);
	useEffect(() => {
		fetchData();
	}, [page, query, fetchData]);
	useEffect(() => {
		const event = window.addEventListener('scroll', () => {
			if (
				(window.innerHeight + window.scrollY) >=
				document.body.scrollHeight - 2
			) {
				setPage((oldPage) => {
					return oldPage + 1
				})
			}

		})
		return () => window.removeEventListener('scroll', event)
	}, []);
	return (
		<main>
			<DataContext.Provider value={{ query, setQuery, data, loading, fetchData, setPage }}>
				<Button />
				<Page />
			</DataContext.Provider>
		</main>
	);
}
ReactDom.render(<App />, document.getElementById('root'));