/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-black">
                <div className="flex-1 px-3">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-3 text-lg text-white">
                        <li><a href="">Order</a></li>
                        <li><a>Order Review</a></li>
                        <li><a>Manage Inventory</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;