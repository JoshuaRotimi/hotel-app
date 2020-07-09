import React from "react";
import Check from './check'
import './checkout.css'


const Checkout = () => {
    const check = Check.map((arr) => {
        return (
            <div className='check-box' key={arr.name}>
                <p className='check-paragraph'>{arr.name}</p>
                <h5 className='check-header'>{arr.date}</h5>
            </div>
        )
    });

    return (
        <section className='section-about'>
            <div className='check'>
                {check}
                <div className='check-box'>
                    <button className='big-button'>Check Rates  &rarr;</button>
                </div>
            </div>
            <div className='about'>
                <h4 className='heading-one sec'>About Us</h4>
                <h2 className='heading-primary'>Your comfort begins here</h2>
            </div>
            <div className='section-review'>
                <div>
                    <img src={require('../../assets/img/footer img.jpg')} alt="Pool" className='review-photo'/>
                </div>
                <div className='section-text'>
                    <p className='section-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <a href="/" className='link-button'> Explore &rarr;</a>
                </div>
                {/*<div className='big-div'>*/}
                {/*    <h1 className='big-heading'>Explore.</h1>*/}
                {/*</div>*/}

            </div>
        </section>

    )
};

export default Checkout;