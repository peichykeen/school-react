import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Stay in contact with our monthly SpEd Newsletter
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>School</h2>
            <h4>Alew W. Spence</h4>
            <h4>4001 Capitol Drive</h4>
            <h4>Dallas, Texas 75204</h4>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <h4><Link to='/'>Email</Link></h4>
            <h4><Link to='/'>Call</Link></h4>
            <h4><Link to='/'>Chat</Link></h4>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Case Managers</h2>
            <h4><Link to='/'>Mr. Cook</Link></h4>
            <h4><Link to='/'>Mr. Volding</Link></h4>
            <h4><Link to='/'>Ms. Gentry</Link></h4>
            <h4><Link to='/'>Ms. Garner</Link></h4>
            <h4><Link to='/'>Ms. Arias</Link></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
