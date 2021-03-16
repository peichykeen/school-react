import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet your Case Managers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/male-silhouette.png'
              text='Department Chair & Math Specialist'
              label='Mr. Cook'
              path='/services'
            />
            <CardItem
              src='images/male-silhouette.png'
              text='Science & Social Studeis Specialist'
              label='Mr. Volding'
              path='/products'
            />
            <CardItem
              src='images/female-silhouette.png'
              text='ELAR Specialist'
              label='Ms. Gentry'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/female-silhouette.png'
              text='FLS Teacher'
              label='Ms. Garner'
              path='/services'
            />
            <CardItem
              src='images/female-silhouette.png'
              text='Behavior Specialist'
              label='Ms. Arias'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
