import { useState, useEffect } from 'react';
import { CartContext } from '@/contexts/CartContext.jsx';

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(() => {
		const stored = localStorage.getItem('cart');
		return stored ? JSON.parse(stored) : [];
	});
	const [isCartOpen, setIsCartOpen] = useState(false);
	const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);

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
				return [...prev, { ...product, quantity: 1 }];
			}
		});
	};

	const increaseQuantity = (productId) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === productId
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
		);
	};

	const decreaseQuantity = (productId) => {
		setCartItems((prev) =>
			prev
				.map((item) =>
					item.id === productId
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter((item) => item.quantity > 0)
		);
	};

	const removeProduct = (productId) => {
		setCartItems((prev) => prev.filter((item) => item.id !== productId));
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
				increaseQuantity,
				decreaseQuantity,
				removeProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
