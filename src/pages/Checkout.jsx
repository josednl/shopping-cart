import { useCart } from '@/contexts/CartContext.jsx';
import { useState } from 'react';
import styles from '@/styles/Checkout.module.css';
import { Link } from 'react-router-dom';

export default function Checkout() {
	const { cartItems, totalItems, closeCart, removeProduct } = useCart();
	const [orderPlaced, setOrderPlaced] = useState(false);

	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const handlePlaceOrder = () => {
		setOrderPlaced(true);

		cartItems.forEach((item) => removeProduct(item.id));
		closeCart();
	};

	if (orderPlaced) {
		return (
			<div className={styles['checkout-success']}>
				<h2>✓ Thank you for your order!</h2>
				<p>Your items will be shipped shortly.</p>

				<Link to='/shop' className={styles['back-to-shop-btn']}>
					← Back to Shop
				</Link>
			</div>
		);
	}

	return (
		<div className={styles['checkout-page']}>
			<h1>Checkout</h1>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<ul className={styles['cart-summary']}>
						{cartItems.map((item) => (
							<li key={item.id} className={styles['cart-item']}>
								<div>
									<strong>{item.title}</strong> —{' '}
									{item.quantity} x ${item.price.toFixed(2)}
								</div>
								<div>
									= ${(item.quantity * item.price).toFixed(2)}
								</div>
							</li>
						))}
					</ul>
					<hr />
					<div className={styles.total}>
						<h3>Total Items: {totalItems}</h3>
						<h2>Total: ${totalPrice.toFixed(2)}</h2>
					</div>
					<button
						onClick={handlePlaceOrder}
						className={styles['place-order-btn']}
					>
						Place Order
					</button>
				</>
			)}
		</div>
	);
}
