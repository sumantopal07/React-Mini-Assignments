import React, { useContext } from 'react';
import { DataContext } from '.';
export default function Page() {
    const { number, content } = useContext(DataContext);
    const temp = content.filter((i, index) => {
        return (Math.floor((index ) / 10) === number );
    });
    return (
        <div className="container">
            {
                temp.map(item => {
                    return (
                        <article key={item.login} className="card">
                            <img src={item.avatar_url} alt="" />
                            <h4>{item.login}</h4>
                            <a href={item.html_url} className="btn">view profile</a>
                        </article>
                    )
                })
            }
        </div>
    );
}