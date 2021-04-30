import React from 'react';
import ItemIcon from './ItemIcon'
const List = (props) => {
    const content=props.content1;
    return (
        <section className="section">
            <h2 className="section-title">
                cocktails
            </h2>
            {
                content.map((item) => <ItemIcon key={item.idDrink} data={item}/> )
            }
        </section>
    );
};

export default List;