import React, { useState } from 'react';

function Box(data) {
    const [ar, setAr] = useState(data.component);

    return (
        <>
            {ar.length > 1 && <h3>{ar.length} birthdays today</h3>}
            {ar.length === 1 && <h3>{ar.length} birthdays today</h3>}
            {ar.length === 0 && <h3>{ar.length} birthdays today</h3>}
            {ar.map(item => {
                return <article key={item.id} className='person'>
                    <img src={item.image} alt=''></img>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.age} years</p>
                    </div>
                </article>;
            })
            }
            <button className="button" onClick={() => { setAr([]) }}>Clear All</button>
        </>
    );

}

export default Box;
