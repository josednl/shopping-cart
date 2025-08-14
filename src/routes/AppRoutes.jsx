import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home.jsx';
import Shop from '@/pages/Shop.jsx';
import About from '@/pages/About.jsx';
import Contact from '@/pages/Contact.jsx';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/shop' element={<Shop />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
		</Routes>
	);
}
