import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext.jsx';
import styles from '@/styles/CartDrawer.module.css';
import TrashIcon from '@/icons/trashIcon';
import ConfirmModal from '@/components/common/confirmModal.jsx';
import ProductDetailModal from '@/components/common/ProductDetailModal.jsx';
import useConfirmRemoval from '@/hooks/useConfirmRemoval.jsx';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
	const {
		isCartOpen,
		cartItems,
		closeCart,
		totalItems,
		increaseQuantity,
	} = useCart();
	const {
		showConfirm,
		handleRemoveProduct,
		handleDecreaseWithConfirm,
		confirmRemove,
		cancelRemove,
	} = useConfirmRemoval();
	const [selectedProduct, setSelectedProduct] = useState(null);
	const totalPrice = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const handleTitleClick = (item) => {
		setSelectedProduct(item);
	};

	const closeProductModal = () => {
		setSelectedProduct(null);
	};

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

	return (
		<aside className={styles.overlay} onClick={closeCart}>
			<div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
				<div className={styles.header}>
					<h3>Shopping Cart ({totalItems})</h3>
					<button
						onClick={closeCart}
						className={styles['close-btn']}
						aria-label='Close cart'
					>
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
											onClick={() =>
												handleTitleClick(item)
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
														handleDecreaseWithConfirm(
															item
														)
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
													handleRemoveProduct(item)
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
				{selectedProduct && (
					<ProductDetailModal
						product={selectedProduct}
						onClose={closeProductModal}
					/>
				)}
				{cartItems.length > 0 && (
					<footer className={styles.footer}>
						<div className={styles.total}>
							<span>Total:</span>
							<span>${totalPrice.toFixed(2)}</span>
						</div>
						<Link to={'/shop'} onClick={closeCart} className={styles['shop-btn']}>
							Continue Shopping
						</Link>
					</footer>
				)}
			</div>
		</aside>
	);
}
