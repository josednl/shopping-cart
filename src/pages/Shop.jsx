import { useEffect, useState, useContext } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import styles from '@/styles/Shop.module.css';
import CategoryFilter from '@/components/common/CategoryFilter.jsx';
import ProductGrid from '@/components/Shop/ProductGrid.jsx';
import PaginationControls from '@/components/common/PaginationControls.jsx';
import SearchBar from '@/components/common/SearchBar.jsx';
import SortFilter from '@/components/common/SortFilter.jsx';

export default function Shop() {
	const [products, setProducts] = useState([]);
	const { allProducts: allProducts } = useContext(AppDataContext);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalProducts, setTotalProducts] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const productsPerPage = 8;
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOption, setSortOption] = useState('default');

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			setError(null);

			try {
				console.log(allProducts);
				let filtered =
					selectedCategory === 'all'
						? allProducts
						: allProducts.filter((p) => p.category === selectedCategory);

				if (searchTerm.trim()) {
					filtered = filtered.filter((product) =>
						product.title
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
					);
				}

				switch (sortOption) {
					case 'price-asc':
						filtered.sort((a, b) => a.price - b.price);
						break;
					case 'price-desc':
						filtered.sort((a, b) => b.price - a.price);
						break;
					case 'rating-desc':
						filtered.sort(
							(a, b) => b.rating?.rate - a.rating?.rate
						);
						break;
					case 'alpha-asc':
						filtered.sort((a, b) => a.title.localeCompare(b.title));
						break;
					case 'alpha-desc':
						filtered.sort((a, b) => b.title.localeCompare(a.title));
						break;
					default:
						break;
				}

				setTotalProducts(filtered.length);

				const startIndex = (currentPage - 1) * productsPerPage;
				const paginated = filtered.slice(
					startIndex,
					startIndex + productsPerPage
				);

				setProducts(paginated);
			} catch (error) {
				setError(`Failed to load products: ${error}`);
			} finally {
				setLoading(false);
			}
		};
		
		fetchProducts();
	}, [allProducts, selectedCategory, currentPage, searchTerm, sortOption]);

	useEffect(() => {
		setCurrentPage(1);
	}, [selectedCategory, searchTerm, sortOption]);

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	const handleAddToCart = (product) => {
		console.log('Add to cart:', product);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
		setCurrentPage(1);
	};

	const handleSearchChange = (term) => {
		setSearchTerm(term);
		setCurrentPage(1);
	};

	const goToNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
	};

	const goToPreviousPage = () => {
		if (currentPage > 1) setCurrentPage((prev) => prev - 1);
	};

	return (
		<section>
			<div className={styles.hero}>
				<div className={styles.overlay}>
					<h2 className={styles.title}>Shop</h2>
				</div>
			</div>
			<div className={styles.shop}>
				<div className={styles.container}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							gap: '16px',
							marginBottom: '32px',
						}}
					>
						<CategoryFilter
							selectedCategory={selectedCategory}
							onChange={handleCategoryChange}
						/>
						<SearchBar
							value={searchTerm}
							onChange={handleSearchChange}
							placeholder='Search products...'
						/>
						<SortFilter
							value={sortOption}
							onChange={setSortOption}
						/>
					</div>

					{loading ? (
						<p className={styles.loading}>Loading...</p>
					) : error ? (
						<p className={styles.loading}>{error}</p>
					) : !products.length ? (
						<p className={styles.loading}>No products available</p>
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
