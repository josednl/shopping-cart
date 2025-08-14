import { useMemo, useEffect } from 'react';
import styles from '@/styles/ProductDetailModal.module.css';
import StarRating from '@/components/common/StarRating.jsx';
import { useCart } from '@/contexts/CartContext.jsx';
import ConfirmModal from '@/components/common/confirmModal.jsx';
import TrashIcon from '@/icons/trashIcon';
import useConfirmRemoval from '@/hooks/useConfirmRemoval.jsx';

export default function ProductDetailModal({ product, onClose }) {
	const { cartItems, addToCart } = useCart();
	const {
		showConfirm,
		handleRemoveProduct,
		handleDecreaseWithConfirm,
		confirmRemove,
		cancelRemove,
	} = useConfirmRemoval();

	const cartItem = useMemo(
		() => cartItems.find((item) => item.id === product.id),
		[cartItems, product.id]
	);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	if (!product) return null;

	const isInCart = Boolean(cartItem);

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<button className={styles.close} onClick={onClose}>
					×
				</button>
				<div className={styles.content}>
					<div className={styles['image-wrapper']}>
						<img src={product.image} alt={product.title} />
					</div>
					<div className={styles.info}>
						<p className={styles.category}>{product.category}</p>
						<h2>{product.title}</h2>
						<div className={styles.rating}>
							<StarRating rating={product.rating.rate} />
							<span className={styles['text-muted']}>
								({product.rating.count} reviews)
							</span>
						</div>
						<p className={styles.price}>
							${product.price.toFixed(2)}
						</p>
						<p>
							<strong>Description:</strong>
						</p>
						<p className={styles.description}>
							{product.description}
						</p>
						{isInCart && (
							<div className={styles['in-cart-box']}>
								<p className={styles['in-cart-label']}>
									✓ In your cart
								</p>
								<p className={styles.quantity}>
									Quantity in cart:{' '}
								</p>
								<div className={styles['cart-controls']}>
									<button
										onClick={() =>
											handleDecreaseWithConfirm(cartItem)
										}
									>
										-
									</button>
									<span>{cartItem.quantity}</span>
									<button onClick={() => addToCart(product)}>
										+
									</button>
									<button
										onClick={() =>
											handleRemoveProduct(product)
										}
									>
										<TrashIcon size='15' color='#d95d95' />
									</button>
								</div>
								<hr />
								<div className={styles.subtotal}>
									<p>SubTotal</p>
									<p>
										${' '}
										{(
											cartItem.quantity * product.price
										).toFixed(2)}
									</p>
								</div>
							</div>
						)}
						{!isInCart && (
							<button
								onClick={() => addToCart(product)}
								className={styles['add-btn']}
							>
								Add to Cart
							</button>
						)}
					</div>
				</div>
				{showConfirm && (
					<ConfirmModal
						message='Are you sure you want to remove this product from your cart?'
						onConfirm={confirmRemove}
						onCancel={cancelRemove}
					/>
				)}
			</div>
		</div>
	);
}
