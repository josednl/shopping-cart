import { useState } from 'react';
import { CartContext } from '@/contexts/CartContext.jsx';

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	const toggleCart = () => setIsCartOpen((prev) => !prev);
	const openCart = () => setIsCartOpen(true);
	const closeCart = () => setIsCartOpen(false);

	const addToCart = (product) => {
		setCartItems((prev) => {
			const existingIndex = prev.findIndex(
				(item) => item.id === product.id
			);

			if (existingIndex !== -1) {
				const updated = [...prev];
				updated[existingIndex] = {
					...updated[existingIndex],
					quantity: updated[existingIndex].quantity + 1,
				};
				return updated;
			} else {
				const { id, title, price, image } = product;
				return [...prev, { id, title, price, image, quantity: 1 }];
			}
		});
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
				totalItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
