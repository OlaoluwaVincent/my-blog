// import React from 'react';
import './topbar.css';
import profilePics from '../../asset/g.jpg';
import { Link } from 'react-router-dom';

const TopBar = () => {
	const user = false;
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
					<li className='topListItem'>
						<Link className='link' to='/'>
							Home
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/about'>
							About
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/contact'>
							Contact
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/write'>
							Write
						</Link>
					</li>
					<li className='topListItem'>
						<Link className='link' to='/logout'>
							Logout
						</Link>
					</li>
				</ul>
			</div>
			<div className='topRight'>
				{user ? (
					<img className='topImg' src={profilePics} alt='img' />
				) : (
					<ul className='topList'>
						<li className='topListItem'>
							<Link className='link' to='/login'>
								Login
							</Link>
						</li>
						<li className='topListItem'>
							<Link className='link' to='/signup'>
								Register
							</Link>
						</li>
					</ul>
				)}
				<i class='topSearchIcon fas fa-search'></i>
			</div>
		</div>
	);
};

export default TopBar;
