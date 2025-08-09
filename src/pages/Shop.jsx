import { useEffect, useState } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import {  getProductsByCategory, getProductsByPage } from '@/services/fakeStoreService.js';
import styles from '@/styles/Shop.module.css';
import ProductCard from '@/components/common/ProductCard.jsx';
import CategoryFilter from '@/components/common/CategoryFilter.jsx';
import ProductGrid from '@/components/Shop/ProductGrid.jsx';
import PaginationControls from '@/components/common/PaginationControls.jsx';

export default function Shop() {
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalProducts, setTotalProducts] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const productsPerPage = 8;

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			setError(null);

			try {
				if (selectedCategory === 'all') {
					const { items, total } = await getProductsByPage(
						currentPage,
						productsPerPage
					);
					setProducts(items);
					setTotalProducts(total);
				} else {
					const filtered = await getProductsByCategory(
						selectedCategory
					);
					setTotalProducts(filtered.length);

					const startIndex = (currentPage - 1) * productsPerPage;
					const paginated = filtered.slice(
						startIndex,
						startIndex + productsPerPage
					);

					setProducts(paginated);
				}
			} catch (error) {
				setError(`Failed to load products: ${error}`);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [selectedCategory, currentPage]);

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	const handleAddToCart = (product) => {
		console.log('Add to cart:', product);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setCurrentPage(1);
	};

	const goToNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) setCurrentPage((prev) => prev - 1);
	};

	if (error) return <p className={styles.loading}>{error}</p>;
	if (!products.length)
		return <p className={styles.loading}>No products available...</p>;

	return (
		<section>
			<div className={styles.hero}>
				<div className={styles.overlay}>
					<h2 className={styles.title}>Shop</h2>
				</div>
			</div>
			<div className={styles.shop}>
				<div className={styles.container}>
					<CategoryFilter
						selectedCategory={selectedCategory}
						onChange={handleCategoryChange}
					/>

					{loading ? (
						<p className={styles.loading}>Loading...</p>
					) : (
						<ProductGrid
							products={products}
							onAddToCart={handleAddToCart}
						/>
					)}

					<PaginationControls
						currentPage={currentPage}
						totalPages={totalPages}
						onNext={goToNextPage}
						onPrev={goToPreviousPage}
					/>
				</div>
			</div>
		</section>
	);
}
