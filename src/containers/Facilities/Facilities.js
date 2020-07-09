import React from "react";
import './facilities.css';
import review from './review';

const reviewSection = review.map(name => {
    return (
        <div className='review-box' key={name.id}>
            <h5 className='review-header'>{name.header}</h5>
            <p className='review-paragraph'>{name.bigParagraph}</p>
            <div className='review-info'>
                <img src={require('../../assets/img/pexels-photo-614810 1.jpg')} alt="" className='review__photo'/>
                <p className='small-paragraph'>{name.smParagraph}
                    <span className='review-span'>{name.span}</span>
                </p>
            </div>
        </div>
    )
});

const Facilities = () => {
    return (
        <section className='section-about'>
            <div className='about'>
                <h4 className='heading-one sec'>Why us?</h4>
                <h2 className='heading-primary'>Our Facilities.</h2>
            </div>
            <div className='facilities'>
                <div className='facility-bg-1'>
                    <p className='facility-text'>Swimming Pool</p>
                </div>
                <div className='facility-bg-2'>
                    <p className='facility-text'>Modern Gym</p>
                </div>
                <div className='facility-bg-3'>
                    <p className='facility-text'>24/7 Restaurant</p>
                </div>
            </div>
            <div className='one'>
                <a href="/" className='link-button'> See All &rarr;</a>
            </div>
            <div className='about'>
                <h4 className='heading-one sec'>Testimonials</h4>
                <h2 className='heading-primary'>What they say about us.</h2>
            </div>
            <div className='review-content'>
                {reviewSection}
            </div>

        </section>
    )
};

export default Facilities;