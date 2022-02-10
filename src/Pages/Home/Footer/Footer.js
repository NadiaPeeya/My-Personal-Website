import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Footer.css'
import img from '../../../images/copyright.png'


const Footer = () => {
    return (

   <div className='footer container'>
       <div>
           <h6 style={{color: '#333333'}}>Copy Right 2022</h6>
       </div>

        <div>
        <div className='footer-socials'>
      <p className="fw-bold fs-4"><Card.Link className='link-color-change' target="_blank" href="https://www.facebook.com/peeya.rahman/"><i class="fab fa-facebook footer-facebook text-color-change"></i></Card.Link></p>
         <p className="fw-bold fs-4"><Card.Link target="_blank" className='link-color-change' href="https://www.linkedin.com/in/nadia-binte-rahman-086104187/"><i class="fab fa-linkedin footer-linkdin text-color-change"></i></Card.Link>
</p>

<p className="fw-bold fs-4"> <Card.Link className='link-color-change' target="_blank" href=""><i class="fab fa-twitter-square footer-twitter text-color-change"></i></Card.Link></p> 
  <p className="fw-bold  fs-4"><Card.Link className='link-color-change' target="_blank" href="https://www.instagram.com/_rahman_nadia_/"

><i class="fab fa-instagram-square footer-instagram text-color-change"></i></Card.Link></p> 

</div>
        </div>    
   </div>

    );
};

export default Footer;