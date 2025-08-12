import { useState } from 'react';
import { CartContext } from '@/contexts/CartContext.jsx';

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => setIsCartOpen((prev) => !prev);
	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);

	const addToCart = (product) => {
		setCartItems((prev) => [...prev, product]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				isCartOpen,
				toggleCart,
				openCart,
				closeCart,
				addToCart,
			}}
		>
            {children}
        </CartContext.Provider>
	);
}