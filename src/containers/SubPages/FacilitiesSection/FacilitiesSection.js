import React from "react";
import './facilities-section.css';

const FacilitiesSection = () => (
    <div>
        <div className='facility-section'>
            <img src={require('../../../assets/img/restaurant.jpg')} alt="" className='facility-image-1'/>
            <img src={require('../../../assets/img/restaurant2.jpg')} alt="" className='facility-image-2'/>
            <div className='facility-info'>
                <h2 className='fac-header'>24/7 Restaurant</h2>
                <p className='room-paragraph'>Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
            </div>
        </div>

    </div>
);

export default FacilitiesSection;