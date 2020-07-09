import React from "react";
import './rooms-section.css';
import Footer from "../../Footer/Footer";

const RoomsSection = () => (
    <div>
        <div className='standard-section'>
            <img src={require('../../../assets/img/standard room.jpg')} alt="" className='standard-photo'/>
            <div className='room-info'>
                <h2 className='room-header'>Standard Room</h2>
                <p className='room-paragraph'>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <h4 className='room-small'>$250/Night</h4>
                <button className='footer-button'>Book Now &rarr;</button>
            </div>
        </div>
        <div className='section-rooms'>
            <div className='deluxe-section'>
                <div className='room-info-two'>
                    <h2 className='room-header'>Deluxe Room</h2>
                    <p className='room-paragraph'>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <h4 className='room-small'>$270/Night</h4>
                    <button className='footer-button'>Book Now &rarr;</button>
                </div>
                <img src={require('../../../assets/img/luxury room.jpg')} alt="" className='standard-photo'/>
            </div>
        </div>
        <div className='standard-section'>
            <img src={require('../../../assets/img/deluxe room.jpg')} alt="" className='standard-photo'/>
            <div className='room-info'>
                <h2 className='room-header'>Luxurious Room</h2>
                <p className='room-paragraph'>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <h4 className='room-small'>$300/Night</h4>
                <button className='footer-button'>Book Now &rarr;</button>
            </div>
        </div>
        <Footer/>
    </div>
);

export default RoomsSection;

