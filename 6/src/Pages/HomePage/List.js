import React from 'react';
import ItemIcon from './ItemIcon'
const List = (props) => {
    const content = props.content1;
    return (
        <section className="section">
            <h2 className="section-title">
                cocktails
            </h2>
            <div className="cocktails-center">

                {
                    content.map((item) => <ItemIcon key={item.idDrink} data={item} />)
                }
            </div>
        </section>
    );
};

export default List;