import React from 'react';
import './sidebar.css';
import a from '../../asset/a.jpg';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>About Me</span>
				<img src={a} alt='about me' />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Perferendis aut velit hic pariatur, id iusto.
				</p>
			</div>

			<div className='sidebarItem'>
				<span className='sidebarTitle'>Categories</span>
				<ul className='sidebarList'>
					<li className='sidebarListItem'>Life</li>
					<li className='sidebarListItem'>Music</li>
					<li className='sidebarListItem'>Tech</li>
					<li className='sidebarListItem'>Cinema</li>
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>Follow us</span>
				<div className='sidebarSocial'>
					<i className='sidebarIcon fab fa-facebook-square'></i>
					<i className='sidebarIcon fab fa-twitter-square'></i>
					<i className='sidebarIcon fab fa-pinterest-square'></i>
					<i className='sidebarIcon fab fa-instagram-square'></i>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
