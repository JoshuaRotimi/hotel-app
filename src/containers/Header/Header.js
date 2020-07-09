import React from 'react';
import './header.css';
import  {NavLink} from "react-router-dom";


const Header = (props) => (
    <div className="header" >
        <div className='nav'>
            <h4 className='heading-one'>
                Romania
                <span className='small-span'> .</span>
            </h4>
            <ul className='list__type'>
                <li className='list__item'><NavLink activeClassName='active' className='list__link' to="/" exact>About</NavLink></li>
                <li className='list__item'><NavLink activeClassName='active' className='list__link' to="/rooms">Rooms</NavLink></li>
                <li className='list__item'><NavLink activeClassName='active' className='list__link' to="/gallery">Gallery</NavLink></li>
                <li className='list__item'><NavLink activeClassName='active' className='list__link' to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className='text-box'>
            <p className='header-paragraph'>{props.paragraph}</p>
            <h1 className='heading-primary'>{props.header}</h1>
            <p className='header-paragraph'>{props.contact}</p>
        </div>
    </div>
);

export default Header;