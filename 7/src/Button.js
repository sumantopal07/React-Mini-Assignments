import React, { useContext, useMemo } from 'react';
import { DataContext } from '.';
export default function Button() {
	const { number, setNumber, pages } = useContext(DataContext);
	const rows = useMemo(() => {
		const temp = [];
		temp.push(<button key={-1} className="prev-btn" onClick={() => setNumber(prev => (prev - 1 === -1)?pages-1:prev - 1) }>prev</button>);
		for (let i = 0; i < pages; i++) {
			if (number !== i )
				temp.push(<button key={i } className="page-btn null" onClick={() => setNumber(i)}>{i + 1}</button>);
			else
				temp.push(<button key={i } className="page-btn active-btn">{i + 1}</button>);
		}
		temp.push(<button key={pages} className="prev-btn" onClick={() => setNumber(prev => (prev + 1 === pages)?0:prev + 1)} >next</button>);
		return temp;
	}, [number,pages]);
	return (
		<div className="btn-container">
			{rows}
		</div>
	);
}
