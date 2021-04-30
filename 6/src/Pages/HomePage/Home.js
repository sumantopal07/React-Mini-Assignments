import React, { useCallback, useContext, useEffect, useState } from 'react';
import Search from './Search';
import List from './List';
import { DataContext } from '../..';
const Home = () => {
	const {loading,content} = useContext(DataContext);
	return (
		<main>
			<Search />
			{
				(loading && <h2 className="section-title">Loading...</h2>)
			}
			{
				(!content && <h2 className="section-title">no cocktails matched your search criteria</h2>)
			}
			{
				(content && content.length > 0 && <List content1={content}  />)
			}
		</main>
	);
};

export default Home;