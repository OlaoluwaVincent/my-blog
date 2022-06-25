import React from 'react';
import './header.css';
import a from '../../asset/a.jpg';

const Header = () => {
	return (
		<div className='header'>
			<div className='headerTitles'>
				<span className='headerTitlesm'>React & Node</span>
				<span className='headerTitlelg'>Blog</span>
			</div>
			<img className='headerImg' src={a} alt='' />
		</div>
	);
};

export default Header;
