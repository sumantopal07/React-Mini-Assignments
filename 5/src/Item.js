import React,{useContext} from 'react';
import {DataContext} from './App';
import {ACTION} from './reducer';
function Item(props) {
    const [data,dispatch] = useContext(DataContext);
    const ID = props.ID;
    const getImage = () => data.val.filter( i => i.id === ID )[0].img; 
    const getTitle = () => data.val.filter( i => i.id === ID )[0].title; 
    const getPrice = () => data.val.filter( i => i.id === ID )[0].price; 
    const getAmount = () => data.val.filter( i => i.id === ID )[0].amount; 
    return (
        <article className="cart-item">
            <img src={getImage()} alt=""/>
            <div>
                <h4>{getTitle()}</h4>
                <h4 className="item-price">{getPrice()}</h4>
                <button className="remove-btn" 
                onClick={() =>dispatch({type : ACTION.DEL, id : ID})}>remove</button>
            </div>
            <div>
                <button className="amount-btn"
                onClick={() => dispatch({type : ACTION.INC, id : ID})}>+</button>
                <p className="amount">{getAmount()}</p>
                <button className="amount-btn"
                onClick={() => dispatch({type : ACTION.DEC, id : ID})} >-</button>
            </div>
        </article>
    );
}

export default Item;
