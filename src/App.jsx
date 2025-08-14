import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/common/Navbar.jsx';
import Footer from '@/components/common/Footer.jsx';
import BackToTopButton from '@/components/common/BackToTopButton.jsx';
import HomePage from '@/pages/Home.jsx';
import Shop from '@/pages/Shop.jsx';
import About from '@/pages/About.jsx';
import { AppDataProvider } from '@/contexts/AppDataProvider.jsx';
import { CartProvider } from '@/contexts/CartProvider.jsx';
import CartDrawer from '@/components/common/CartDrawer.jsx';

function App() {
	return (
		<BrowserRouter>
			<AppDataProvider>
				<CartProvider>
					<div className='app-layout'>
						<Navbar />
						<main className='main-content'>
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/shop' element={<Shop />} />
								<Route path='/about' element={<About />} />
							</Routes>
						</main>
						<Footer />
					</div>
					<CartDrawer />
				</CartProvider>
				<BackToTopButton />
			</AppDataProvider>
		</BrowserRouter>
	);
}

export default App;
