import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import MainPage from './pages/MainPage/MainPage';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.scss';

function App() {
	return (

		<div className="container">
			<Header />
			<div className="sideNav-page-container">
				<div>
					<SideNav />
				</div>
				<div>
					<Routes>
						<Route
							path="/"
							element={<MainPage />}
						/>
						<Route
							path="/:userId"
							element={<Dashboard isMock={false}/>}
						/>
						<Route
							path="/mock/:userId"
							element={<Dashboard isMock={true} />}
						/>
					</Routes>
				</div>
			</div>

		</div>


	);
}

export default App;
