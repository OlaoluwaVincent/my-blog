import './singlePost.css';
import image from '../../asset/l.jpg';

const SinglePost = () => {
	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				<img src={image} alt='' className='singlePostImg' />
				<h1 className='singlePostTitle'>
					Lorem, ipsum.
					<div className='singlePostEdit'>
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon far fa-trash-alt'></i>
					</div>
				</h1>
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Author: <b>Vivian Fehintola</b>
					</span>
					<span className='singlePostDate'>1hr ago</span>
				</div>
				<p className='singlePostDesc'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Non, libero impedit! Laudantium, similique fugit. Nesciunt
					ipsum voluptatum nobis, ex ullam rerum quidem porro,
					repudiandae dignissimos doloremque accusantium, atque quam
					repellendus sapiente quae! At numquam eveniet explicabo esse
					iure asperiores, tenetur fuga saepe deserunt animi
					temporibus sunt! Cum rerum, aliquid amet possimus recusandae
					temporibus, doloremque velit harum deleniti ullam sint
					expedita. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Doloremque eum eveniet id, delectus neque voluptatum
					consequatur? Maxime exercitationem ratione amet aspernatur
					dolores iure consequatur obcaecati necessitatibus, maiores
					ut magnam debitis? Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Voluptatem asperiores consequuntur,
					architecto pariatur beatae quod! Optio sit reprehenderit
					delectus perferendis officia eum itaque iure perspiciatis
					est et impedit dolorum numquam, quisquam vel reiciendis
					veniam omnis. Soluta odit eius a atque voluptas? Soluta
					tenetur enim perspiciatis!
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
