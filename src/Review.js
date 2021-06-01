import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];
const check = (number)=>{
  if(number>people.length-1){
    return 0;
  }
  if(number<0){
    return people.length-1;
  }
  return number;
}


const next =()=>{
  setIndex((index)=>{
    let new1 = index+1;
    return check(new1);
  })
}

const prev =()=>{
  setIndex((index)=>{
    let new1 = index-1;
    return check(new1);
  })
}

const random =()=>{
  let rem = Math.floor(Math.random()*4);
  if(rem===index){
    rem= index+1;
  }
  setIndex(check(rem));
}
  return(
    <article className="review">
      <div className="img-container">
        <img src={image} alt={text} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prev}><FaChevronLeft/></button>
        <button className="next-btn" onClick={next}><FaChevronRight/></button>
      </div>
      <button className="random-btn" onClick={random}>Surprise Me</button>
    </article>
  );
};

export default Review;
