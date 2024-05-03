import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
import { Link } from 'react-router-dom'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Subcribe now to get useful riding information</h2>

                     <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subcribe</button>
                     </div>
                    <Link to="/booking">
                     <button className="btn newsletter__btn">Book Now</button>
                    </Link>
                     <p className='mt-3'>They are blinded by passions, to provide themselves.Hoping you will surely love the Ride with us.
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter