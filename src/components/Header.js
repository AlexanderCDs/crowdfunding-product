/**
 * @author: alexandercd
 * @date: 27/septiembre/2021
 * @description: 
**/
import React from 'react';
import logo from '../assets/svgs/logo.svg'; 
import PropTypes from 'prop-types';

const items = [
    {
        name: 'About',
        to: 'about'
    },
    {
        name: 'Discover',
        to: 'discover'
    },
    {
        name: 'Get Started',
        to: 'get-started'
    },
]

const Header = ({title, src, width, height}) => {
    return (
        <header> 
            <div className="nav-container">
                <nav>
                    <div className="nav-left">
                        <img 
                            alt={title}
                            src={src}
                            width={width}
                            height={height}
                        ></img>
                    </div>
                    <ul className="nav-right">
                        {items.map( (item, index) => (
                            <li key={item.to}>
                                <a href={`#${item.to}`}>{item.name}</a>
                            </li>
                        ) )}
                    </ul>
                    <div className="hamburger"> </div>
                </nav>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'CrowdFund',
    width: '130',
    height: '20',
    src: logo
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;