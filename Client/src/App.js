import Single from './Components/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import TopBar from './Components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SinglePost from './Components/singlePost/SinglePost';

function App() {
	const loggedIn = false;
	return (
		<Router>
			<TopBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/signup'
					element={loggedIn ? <Home /> : <SignUp />}
				/>
				<Route
					path='/login'
					element={!loggedIn ? <Login /> : <Home />}
				/>
				<Route
					path='/write'
					element={loggedIn ? <Write /> : <Login />}
				/>
				<Route
					path='/setting'
					element={loggedIn ? <Settings /> : <Login />}
				/>
				<Route path='/post/:postId' element={<SinglePost />} />
			</Routes>
		</Router>
	);
}

export default App;
