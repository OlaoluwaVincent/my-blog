import './signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div className='Signup'>
			<h1 className='SignupTitle'>Signup</h1>
			<form className='SignupForm'>
				<label>First Name</label>
				<input
					type='text'
					placeholder='First Name'
					className='SignupInput'
				/>
				<label>Last Name</label>
				<input
					type='text'
					placeholder='Last Name'
					className='SignupInput'
				/>
				<label>UserName</label>
				<input
					type='text'
					placeholder='UserName'
					className='SignupInput'
				/>
				<label>Email</label>
				<input
					type='text'
					className='SignupInput'
					placeholder='Enter Email'
				/>
				<label>Password</label>
				<input
					type='password'
					className='SignupInput'
					placeholder='Enter Password'
				/>
				<label>Confirm Password</label>
				<input
					type='password'
					className='SignupInput'
					placeholder='Confirm Password'
				/>
				<button className='SignupButton'>Create Account</button>
			</form>
			<button className='registerButton'>
				<Link className='link' to='/login'>
					Login Here
				</Link>
			</button>
		</div>
	);
};

export default SignUp;
