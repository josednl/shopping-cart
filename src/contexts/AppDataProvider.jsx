import { useState, useEffect } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import {
	getCategories,
	getProducts,
	getAllProducts,
} from '@/services/fakeStoreService.js';

export function AppDataProvider({ children }) {
	const [bestSellers, setBestSellers] = useState([]);
	const [categories, setCategories] = useState([]);
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		if (categories.length === 0) {
			getCategories().then(setCategories).catch(console.error);
		}
	}, [categories]);

	useEffect(() => {
		if (bestSellers.length === 0) {
			getProducts(10).then(setBestSellers).catch(console.error);
		}
	}, [bestSellers]);

	useEffect(() => {
		if (allProducts.length === 0) {
			getAllProducts().then(setAllProducts).catch(console.error);
		}
	}, [allProducts]);

	return (
		<AppDataContext.Provider
			value={{
				bestSellers,
				setBestSellers,
				categories,
				setCategories,
				allProducts,
				setAllProducts,
			}}
		>
			{children}
		</AppDataContext.Provider>
	);
}
