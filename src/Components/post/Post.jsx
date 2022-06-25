import React from 'react';
import './post.css';
import blogImage from '../../asset/c.jpg';

const post = () => {
	return (
		<div className='post'>
			<img src={blogImage} alt='' className='postImg' />
			<div className='postInfo'>
				<div className='postCats'>
					<span className='postCat'>Health</span>
					<span className='postCat'>Food</span>
				</div>
				<span className='postTitle'>Lorem, ipsum dolor.</span>
				<hr />
				<span className='postDate'>1hr ago</span>
			</div>
			<p className='postDesc'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
				doloribus aperiam. Quae, consequatur nam reprehenderit, vitae
				sint dolorum, velit mollitia voluptatibus dignissimos quod
				animi! Et laborum numquam eius consequuntur tempore. Lorem ipsum
				dolor sit amet consectetur, adipisicing elit. Deserunt expedita
				modi labore tempore deleniti asperiores repudiandae nemo,
				laborum ab. Modi voluptatum labore nulla ea! Totam, consequatur
				impedit, nulla aliquam repellat et culpa accusantium unde
				incidunt velit dicta voluptate, veniam officiis laboriosam
				placeat suscipit quidem necessitatibus accusamus blanditiis
				praesentium aut! Neque, libero non magni totam atque dicta ipsa
				facilis eos aliquam.
			</p>
		</div>
	);
};

export default post;
