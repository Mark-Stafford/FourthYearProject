import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Our Popular Cities!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/amsterdam.jpeg'
              text='Amsterdam'
              
              Link to='/prague'
              
            />
            <CardItem
            
              src='images/prague.jpeg'
              text='Prague'
            
           
            />
          </ul>
         
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
