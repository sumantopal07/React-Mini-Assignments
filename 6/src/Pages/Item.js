import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
const url ='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const Item = () => {
    const { id } = useParams();
    const [data,setData] = useState(null);
    useEffect(() => {
        fetch(url+id)
        .then(res => res.json())
        .then(res => {
            setData(res.drinks[0]);
        })
      }, [id]);
    return (
        <>
        {
            (!data  && <h2 className="section-title">Loading...</h2>)
        }
        {
            (data 
                && 
            (
                <section className="section cocktail-section">
                <Link className="btn btn-primary" to="/">back home</Link>
                <h2 className="section-title">{data.strDrink}</h2>
                <div className="drink">
                    <img src={data.strDrinkThumb} alt="" />
                    <div className="drink-info">
                        <p><span className="drink-data">name :</span> {data.strDrink}</p>
                        <p><span className="drink-data">category :</span> {data.strCategory}</p>
                        <p><span className="drink-data">info :</span> {data.Alcoholic}</p>
                        <p><span className="drink-data">glass :</span> {data.strGlass}</p>
                        <p><span className="drink-data">instructons :</span>{data.strInstructions}</p>
                        <p><span className="drink-data">ingredients :</span>
                            {data.strIngredient1  && <span>{data.strIngredient1}</span>}
                            {data.strIngredient2  && <span>{data.strIngredient2}</span>}
                            {data.strIngredient3  && <span>{data.strIngredient3}</span>}
                            {data.strIngredient4  && <span>{data.strIngredient4}</span>}
                            {data.strIngredient5  && <span>{data.strIngredient5}</span>}
                            {data.strIngredient6  && <span>{data.strIngredient6}</span>}
                            {data.strIngredient7  && <span>{data.strIngredient7}</span>}
                            {data.strIngredient8  && <span>{data.strIngredient8}</span>}
                            {data.strIngredient9  && <span>{data.strIngredient9}</span>}
                            {data.strIngredient10  && <span>{data.strIngredient10}</span>}
                            {data.strIngredient11  && <span>{data.strIngredient11}</span>}
                            {data.strIngredient12  && <span>{data.strIngredient12}</span>}
                            {data.strIngredient13  && <span>{data.strIngredient13}</span>}
                            {data.strIngredient14  && <span>{data.strIngredient14}</span>}
                            {data.strIngredient15  && <span>{data.strIngredient16}</span>}
                        </p>
                    </div>
                </div>
            </section>
            ))
        }
        
    </>
    );
};

export default Item;