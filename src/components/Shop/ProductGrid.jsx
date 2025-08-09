import ProductCard from '@/components/common/ProductCard.jsx';

export default function ProductGrid({ products, onAddToCart }) {
	return (
		<div
			style={{
				display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '16px',
				padding: '16px'
			}}
		>
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
