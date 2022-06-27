import SideBar from '../../Components/sidebar/SideBar';
import './settings.css';
import profilePics from '../../asset/g.jpg';

const Settings = () => {
	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>
						Update Your Account
					</span>
					<span className='settingsDeleteTitle'>Delete Account</span>
				</div>
				<form className='settingsForm'>
					<label>Profile Picture</label>
					<div className='settingsPP'>
						<img
							src={profilePics}
							alt='profile picture'
							className='profilePics'
						/>
						<label htmlFor='fileinput'>
							<i className='settingsPPIcon far fa-user-circle'></i>
						</label>
						<input type='file' id='fileinput' />
					</div>
					<label>Username</label>
					<input type='text' placeholder='Vivian Fehintola' />
					<label>Email</label>
					<input
						type='email'
						placeholder='Vivianfehintola@gmail.com'
					/>
					<label>Password</label>
					<input type='password' />
					<button className='settingsSubmit'>Update</button>
				</form>
			</div>
			<SideBar />
		</div>
	);
};

export default Settings;
