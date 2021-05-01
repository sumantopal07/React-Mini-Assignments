import React from 'react';
import { Link } from 'react-router-dom';
const ItemIcon = ({data}) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={data.strDrinkThumb} alt="A1" />
            </div>
            <div className="cocktail-footer">
                <h3>{data.strDrink}</h3>
                <h4>{data.strGlass}</h4>
                <p>{data.Alcoholic}</p>
                <Link className="btn btn-primary btn-details" data={data} to={`/cocktail/${data.idDrink}`} >details</Link>
            </div>
        </article>
    );
};
export default ItemIcon;