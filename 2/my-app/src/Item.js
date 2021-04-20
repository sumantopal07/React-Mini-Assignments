import React, { useState, useEffect } from 'react';
function Item(props) {
    const data = props.data;
    const text=data.info;
    const trimmedText = text.substr(0,200);
    const [flag,setFlag] = useState(true);
    return <div className="single-tour">
        <img src={data.image} alt=""></img>
        <footer>
            <div className="tour-info">
                <h4>{data.name}</h4>
                <div className="tour-price">
                    <h4>${data.price}</h4>
                </div>

            </div>
            {flag && <p>{trimmedText} ... <button onClick={()=>{ setFlag(false)}}>Read More</button></p>} 
            {!flag && <p>{text} <button onClick={()=>{ setFlag(true)}}>Show Less</button></p>} 
            <button className="delete-btn"
                onClick={() => props.onChange(data.id)}>Not Interested</button></footer>
    </div>;
}
export default Item;