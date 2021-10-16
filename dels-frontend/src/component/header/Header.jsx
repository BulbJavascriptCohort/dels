import React from 'react';
import { NavWrapper } from './Header.style';
import logo from '../../assets/icons/DELS.svg';

function Header() {
	return (
		<NavWrapper>
			<div className="dels_work">
				<div className="logo">
					<img src={logo} />
				</div>
				<div className="nav_menu">
					<p className="home">HOME</p>
					<p className="about">ABOUT US</p>
					<p className="track">TRACK ORDER</p>
					<p className="service">SERVICES</p>
					<button className="login">LOG IN</button>
				</div>
			</div>
        </NavWrapper>
        
	);
}

export default Header;
