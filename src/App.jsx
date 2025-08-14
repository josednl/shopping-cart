import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '@/components/common/Navbar.jsx';
import Footer from '@/components/common/Footer.jsx';
import BackToTopButton from '@/components/common/BackToTopButton.jsx';
import { AppDataProvider } from '@/contexts/AppDataProvider.jsx';
import { CartProvider } from '@/contexts/CartProvider.jsx';
import CartDrawer from '@/components/common/CartDrawer.jsx';
import AppRoutes from '@/routes/AppRoutes.jsx';

function App() {
	return (
		<BrowserRouter>
			<AppDataProvider>
				<CartProvider>
					<div className='app-layout'>
						<Navbar />
						<main className='main-content'>
							<AppRoutes />
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
