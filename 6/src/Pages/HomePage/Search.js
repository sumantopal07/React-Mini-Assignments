import React, { useContext } from 'react';
import { DataContext } from '../..';
const Search = () => {
	const {setInput,input} = useContext(DataContext);
    function handleSubmit(e) {
        e.preventDefault()
    }
    function fx(str){
        setInput(str);
    }
    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">
                        search your favorite cocktail
                    </label>
                    <input type="text" id="name" value={input}
                    onChange={(e) => fx(e.target.value)}/>
                </div>
            </form>
        </section>
    );
};
export default Search;
