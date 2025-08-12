import { useCart } from '@/contexts/CartContext.jsx';
import styles from '@/styles/CartDrawer.module.css';

export default function CartDrawer() {
	const { isCartOpen, cartItems, closeCart } = useCart();

	if (!isCartOpen) return null;

	const handleOverlayClick = () => {
		closeCart();
	};

	const stopClickPropagation = (e) => {
		e.stopPropagation();
	};

	return (
		<div className={styles.overlay} onClick={handleOverlayClick}>
			<div className={styles.drawer} onClick={stopClickPropagation}>
				<div className={styles.header}>
					<h3>Shopping Cart ({cartItems.length})</h3>
					<button onClick={closeCart} className={styles['close-btn']}>
						×
					</button>
				</div>
				<div className={styles.content}>
					{cartItems.length === 0 ? (
						<p>Your cart is empty.</p>
					) : (
						<ul className={styles['cart-list']}>
							{cartItems.map((item, index) => (
								<li key={index} className={styles['cart-item']}>
									<img
										src={item.image}
										alt={item.title}
										className={styles['cart-item-image']}
									/>
									<div className={styles['cart-item-details']}>
										<h4 className={styles['cart-item-title']}>
											{item.title}
										</h4>
										<p className={styles['cart-item-price']}>
											${item.price}
										</p>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}
