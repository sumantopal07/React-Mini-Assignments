import React, { useContext } from 'react';
import { DataContext } from './App';

function Nav(props) {
	const [data,] = useContext(DataContext);
	function totalCalc() {
		if (data.length === 0) return 0;
		return data.val.reduce((cur, item) => item.amount + cur, 0);
	}
	return (
		<nav>
			<div className="nav-center">
				<h3>useReducer</h3>
				<div className="nav-container">
					<div className="amount-container">
						<p className="total-amount">{totalCalc()}</p>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
