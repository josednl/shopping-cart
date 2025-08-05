import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/common/Navbar.jsx';
import HomePage from './components/pages/Home.jsx';

function App() {
	
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
