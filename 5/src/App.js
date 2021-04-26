import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import Nav from './Nav';
import Total from './Total';
import Item from './Item';
import reducer, { ACTION } from './reducer';
const url = "https://course-api.com/react-useReducer-cart-project";


export const DataContext = React.createContext();
function App() {
	const [data, dispatch] = useReducer(reducer,
		{ type: ACTION.NOTHING, loading: true, length: 0 });
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(res => dispatch({ type: ACTION.SET, val: res }));
	}, []);
	return (
		<main>
			<DataContext.Provider value={[data, dispatch]}>
				<Nav key={1} />
				{
					(data.loading) ? (<h1>Loading...</h1>)
						:
						(
							<section classame="cart">
								<header><h2>your bag</h2></header>
								{
									(data.length > 0) ? (
										data.val.map(item => <div><Item key={item.id} ID={item.id} /></div>)
									)
										:
										(
											<h4>your cart is empty</h4>
										)
								}
								{
									(data.length > 0) && <Total key={1} />
								}
							</section>
						)
				}
			</DataContext.Provider>
		</main>
	);
}

export default App;
