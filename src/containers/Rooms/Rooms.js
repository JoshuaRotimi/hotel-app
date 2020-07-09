import React from "react";
import './rooms.css'

const Rooms = () => {
    return (
        <section className='section-rooms'>
            <div className='rooms'>
                <h4 className='heading-one sec'>Rooms</h4>
                <h2 className='heading-primary'>Rooms / Suites.</h2>
            </div>
            <div className='container'>
                <h1 className='big-heading-2'>Suites.</h1>
                <div className='rooms-section'>
                    <p className='room-text'>Luxury Room</p>
                    <p className='room-text'>$300/ Night</p>

                </div>
                <div className='rooms-section-2'>
                    <div className='deluxe'>
                        <p className='room-text-2'>Deluxe Room</p>
                        <p className='room-text-2'>$270/ Night</p>
                    </div>
                    <div className='deluxe-2'>
                        <p className='room-text-2'>Standard Room</p>
                        <p className='room-text-2'>$250/ Night</p>
                    </div>
                </div>
            </div>
            <div className='two'>
                <a href="/" className='link-button'> See All &rarr;</a>
            </div>


        </section>
    )

};

export default Rooms;