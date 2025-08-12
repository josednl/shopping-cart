import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext.jsx';
import styles from '@/styles/CartDrawer.module.css';
import TrashIcon from '@/icons/trashIcon';
import ConfirmModal from '@/components/common/confirmModal.jsx';

export default function CartDrawer() {
	const [showConfirm, setShowConfirm] = useState(false);
	const [productToRemove, setProductToRemove] = useState(false);
	const {
		isCartOpen,
		cartItems,
		closeCart,
		totalItems,
		increaseQuantity,
		decreaseQuantity,
		removeProduct,
	} = useCart();

	useEffect(() => {
		if (isCartOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isCartOpen]);

	if (!isCartOpen) return null;

	const handleOverlayClick = () => {
		closeCart();
	};

	const stopClickPropagation = (e) => {
		e.stopPropagation();
	};

	const handleDecrease = (item) => {
		if (item.quantity === 1) {
			setProductToRemove(item.id);
			setShowConfirm(true);
		} else {
			decreaseQuantity(item.id);
		}
	};

	const handleRemoveProduct = (id) => {
		setProductToRemove(id);
		setShowConfirm(true);
	};

	const confirmRemove = () => {
		removeProduct(productToRemove);
		setShowConfirm(false);
		setProductToRemove(null);
	};

	const cancelRemove = () => {
		setShowConfirm(false);
		setProductToRemove(null);
	};

	return (
		<aside className={styles.overlay} onClick={handleOverlayClick}>
			<div className={styles.drawer} onClick={stopClickPropagation}>
				<div className={styles.header}>
					<h3>Shopping Cart ({totalItems})</h3>
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
									<div
										className={styles['cart-item-details']}
									>
										<h4
											className={
												styles['cart-item-title']
											}
										>
											{item.title}
										</h4>
										<p
											className={
												styles['cart-item-price']
											}
										>
											{item.quantity} x $
											{item.price.toFixed(2)} = $
											{(
												item.quantity * item.price
											).toFixed(2)}
										</p>
										<div
											className={styles['cart-controls']}
										>
											<div
												className={
													styles['quantity-controls']
												}
											>
												<button
													onClick={() =>
														handleDecrease(item)
													}
													className={
														styles['qty-btn']
													}
												>
													-
												</button>
												<span className={styles['qty']}>
													{item.quantity}
												</span>
												<button
													onClick={() =>
														increaseQuantity(
															item.id
														)
													}
													className={
														styles['qty-btn']
													}
												>
													+
												</button>
											</div>
											<button
												className={styles['remove-btn']}
												onClick={() =>
													handleRemoveProduct(item.id)
												}
												title='Remove'
											>
												<TrashIcon color='#d95d95' />
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
				{showConfirm && (
					<ConfirmModal
						message='Are you sure you want to remove this product from your cart?'
						onConfirm={confirmRemove}
						onCancel={cancelRemove}
					/>
				)}
			</div>
		</aside>
	);
}
