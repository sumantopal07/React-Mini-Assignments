import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {
	const [ar, setAr] = useState([]);
	let KEY = "";
	const ref = useRef(null);
	const Button = useRef(null);
	useEffect(() => {
		Button.current.innerHTML = "Submit";
		if (!localStorage.getItem("TODOS"))
			localStorage.setItem("TODOS", JSON.stringify([]));
		else
			setAr(JSON.parse(localStorage.getItem("TODOS")));
	}, []);
	function add(e) {
		e.preventDefault();
		if (Button.current.innerHTML === "Submit") {
			setAr(() => {
				const newAr = JSON.parse(localStorage.getItem("TODOS")).map(i => i);
				newAr.push({
					id: uuidv4(),
					name: ref.current.value
				});
				localStorage.setItem("TODOS", JSON.stringify(newAr));
				ref.current.value = "";
				return newAr;
			});
		}
		else {
			setAr(() => {
				const newAr = JSON.parse(localStorage.getItem("TODOS"))
					.map(i => {
						if (i.id !== KEY)
							return i;
						return {
							id: KEY,
							name: ref.current.value,
						}
					});
				localStorage.setItem("TODOS", JSON.stringify(newAr));
				KEY = "";
				Button.current.innerHTML = "Submit";
				return newAr;
			});
		}
	}
	function del(key) {
		setAr(() => {
			const newAr = JSON.parse(localStorage.getItem("TODOS")).filter(i => i.id !== key);
			localStorage.setItem("TODOS", JSON.stringify(newAr));
			return newAr;
		});
	}
	function edit(key, index) {
		ref.current.focus();
		Button.current.innerHTML = "Edit";
		ref.current.value = ar[index].name;
		KEY = key;
	}
	return (
		<section className="section-center">
			<center><h3>Grocery bud</h3></center>
			<form className="grocery-form">
				<div className="form-control">
					<input type="text" className="grocery" placeholder="e.g. eggs" ref={ref} />
					<button onClick={(e) => add(e)} ref={Button} className="submit-btn"></button>
				</div>
				<div className="grocery-container">
					{
						ar.map((item, index) => {
							return (<div key={item.id} className="grocery-list">
								<article className="grocery-item">
									<p className="title">{item.name}</p>
									<div className="btn-container">
										<button type="button"
											onClick={() => edit(item.id, index)}
											className="edit-btn">EDIT
								</button>
										<button type="button"
											onClick={() => del(item.id)}
											className="delete-btn">DELETE
								</button>
									</div>
								</article>
							</div>);
						})
					}
					<button className="clear-btn">clear items</button></div>
			</form>
		</section>
	);
}

export default App;

