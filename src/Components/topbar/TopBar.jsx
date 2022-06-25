// import React from 'react';
import './topbar.css';
import profilePics from '../../asset/a.jpg';

const TopBar = () => {
	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fab fa-facebook-square'></i>
				<i className='topIcon fab fa-twitter-square'></i>
				<i className='topIcon fab fa-pinterest-square'></i>
				<i className='topIcon fab fa-instagram-square'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>Home</li>
					<li className='topListItem'>About</li>
					<li className='topListItem'>Contact</li>
					<li className='topListItem'>Write</li>
					<li className='topListItem'>Logout</li>
				</ul>
			</div>
			<div className='topRight'>
				<img className='topImg' src={profilePics} alt='img' />
				<i class='topSearchIcon fas fa-search'></i>
			</div>
		</div>
	);
};

export default TopBar;