import React, { useContext } from 'react';
import { DataContext } from './App';
import { ACTION } from './reducer';

function Total() {
    const [data, dispatch] = useContext(DataContext);
    return (
        <footer>
            <hr></hr>
            <div className="cart-total">
                <h4>total <span>{data.val.reduce((cur, item) => parseFloat(item.price)*item.amount + cur, 0)}</span></h4>
            </div>
            <button
                onClick={() => dispatch({ type: ACTION.CLEAR })}
                className="btn clear-btn">clear cart</button>
        </footer>
    );
}

export default Total;
