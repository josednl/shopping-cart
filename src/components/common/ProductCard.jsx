import { useState } from 'react';
import StarRating from '@/components/common/StarRating.jsx';
import styles from '@/styles/ProductCard.module.css';
import { useCart } from '@/contexts/CartContext.jsx';
import ProductDetailModal from '@/components/common/ProductDetailModal.jsx';

export default function ProductCard({ product, showCategory = true }) {
	const { addToCart, cartItems } = useCart();
	const isInCart = cartItems.some((item) => item.id === product.id);
	const [showModal, setShowModal] = useState(false);

	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);

	const handleAddToCart = (product) => {
		addToCart(product);
	};

	return (
		<div className={styles.card}>
			<div className={styles.container}>
				<div className={styles['image-wrapper']}>
					<img
						src={product.image}
						alt={product.title}
						className={styles.image}
					/>
				</div>
				<div className={styles.info}>
					<p
						className={styles.title}
						title={product.title}
						onClick={openModal}
					>
						{product.title}
					</p>
					{showCategory && (
						<p className={styles.category}>{product.category}</p>
					)}
					<div className={styles.rating}>
						<StarRating rating={product.rating.rate} />
						<p className={styles['rating-count']}>
							({product.rating.count})
						</p>
					</div>
					<div className={styles.description}>
						<p className={styles.price}>${product.price}</p>
						{isInCart ? (
							<button
								className={styles['in-cart-button']}
								disabled
							>
								Added to Cart ✓
							</button>
						) : (
							<button
								className={styles.button}
								onClick={() => handleAddToCart(product)}
							>
								Add to Cart
							</button>
						)}
					</div>
				</div>
			</div>
			{showModal && (
				<ProductDetailModal product={product} onClose={closeModal} />
			)}
		</div>
	);
}
