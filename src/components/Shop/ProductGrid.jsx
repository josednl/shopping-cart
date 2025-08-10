import ProductCard from '@/components/common/ProductCard.jsx';
import styles from '@/styles/ProductGrid.module.css';

export default function ProductGrid({ products, onAddToCart }) {
	return (
		<div className={styles['products-grid']}>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					onAddToCart={onAddToCart}
				/>
			))}
		</div>
	);
}
