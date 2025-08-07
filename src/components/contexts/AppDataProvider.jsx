import { useState } from 'react';
import { AppDataContext } from '@/components/contexts/AppDataContext.jsx';

export function AppDataProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    return (
        <AppDataContext.Provider value={{ products, setProducts, categories, setCategories }}>
            {children}
        </AppDataContext.Provider>
    );
};
