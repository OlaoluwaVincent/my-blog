import './write.css';
import formImage from '../../asset/j.jpg';
const Write = () => {
	return (
		<div className='write'>
			<img src={formImage} alt='form image' className='writeImg' />
			<form className='writeForm'>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i className='writeIcon fas fa-plus'></i>
					</label>
					<input type='file' id='fileInput' />
					<input
						type='text'
						placeholder='Title'
						className='writeInput title'
						autoFocus={true}
					/>
				</div>
				<div className='writeFormGroup'>
					<textarea
						className='writeInput text'
						placeholder='Write Blog...'
						type='text'></textarea>
				</div>
				<button className='writeSubmit'>Publish</button>
			</form>
		</div>
	);
};

export default Write;
