import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/common/Navbar.jsx';
import Footer from '@/components/common/Footer.jsx';
import BackToTopButton from '@/components/common/BackToTopButton.jsx';
import HomePage from './components/pages/Home.jsx';
import { AppDataProvider } from '@/components/contexts/AppDataProvider.jsx';

function App() {
	return (
		<BrowserRouter>
			<AppDataProvider>
				<div className='app-layout'>
					<Navbar />
					<main className='main-content'>
						<Routes>
							<Route path='/' element={<HomePage />} />
						</Routes>
					</main>
					<Footer />
				</div>
				<BackToTopButton />
			</AppDataProvider>
		</BrowserRouter>
	);
}

export default App;
