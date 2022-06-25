import React from 'react';
import './home.css';
import Header from '../../Components/header/Header';
import Posts from '../../Components/posts/Posts';
import SideBar from '../../Components/sidebar/SideBar';

const Home = () => {
	return (
		<>
			<Header />
			<div className='home'>
				<Posts />
				<SideBar />
			</div>
		</>
	);
};

export default Home;
