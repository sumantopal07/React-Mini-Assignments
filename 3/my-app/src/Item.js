import React, { useState, useEffect } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
export default function Item(props) {
    const index = props.index;
    console.log(index);
    return(
        <article className='review'>
      <div className='img-container'>
        <img src={reviews[index].image} alt={reviews[index].name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{reviews[index].name}</h4>
        <p className='job'>{reviews[index].job}</p>
        <p className='info'>{reviews[index].text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={()=>props.fixChange(index,1)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={()=>props.fixChange(index,-1)}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={props.randomChange}>
        surprise me
      </button>
    </article>
    );
}