import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
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
							path="/:userId"
							element={<Dashboard />}
						/>
					</Routes>
				</div>
			</div>

		</div>


	);
}

export default App;
