import { useState, useEffect } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import { getCategories, getProducts } from '@/services/fakeStoreService.js';

export function AppDataProvider({ children }) {
    const [bestSellers, setBestSellers] = useState([]);
    const [categories, setCategories] = useState([]);

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

    return (
        <AppDataContext.Provider value={{ bestSellers, setBestSellers, categories, setCategories }}>
            {children}
        </AppDataContext.Provider>
    );
};
