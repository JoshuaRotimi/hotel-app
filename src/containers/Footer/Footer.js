import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-content'>
                    <h2 className='footer-header'>Begin your Amazing experience here</h2>
                    <p className='footer-paragraph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    <button className='footer-button'>Book Now</button>
                </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
                <h3 className='bottom-header'>Romania</h3>
                <p className='bottom-p'>&copy; Romania.2020.All Rights Reserved</p>
                <div>
                    <img src={require('../../assets/img/Vector-fb.svg')} alt="facebook" className='footer-icon'/>
                    <img src={require('../../assets/img/Vector-twitter.svg')} alt="twitter" className='footer-icon'/>
                    <img src={require('../../assets/img/Vector-ig.svg')} alt="instagram" className='footer-icon'/>
                </div>

            </div>

        </footer>
    )
};

export default Footer;