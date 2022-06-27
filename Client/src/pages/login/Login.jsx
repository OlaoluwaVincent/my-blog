import './login.css';
import { Link } from 'react-router-dom';

const login = () => {
	return (
		<div className='login'>
			<h1 className='loginTitle'>Login</h1>
			<form className='loginForm'>
				<label>Email</label>
				<input
					type='text'
					className='loginInput'
					placeholder='Enter Email'
				/>
				<label>Password</label>
				<input
					type='password'
					className='loginInput'
					placeholder='Enter Password'
				/>
				<button className='loginButton'>Login</button>
			</form>
			<p className='register'>
				Don't have an account?{' '}
				<button className='registerButton'>
					<Link className='link' to='/signup'>
						Register
					</Link>
				</button>
			</p>
		</div>
	);
};

export default login;
