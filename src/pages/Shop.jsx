import { useEffect, useState, useContext, useMemo } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import styles from '@/styles/Shop.module.css';
import CategoryFilter from '@/components/common/CategoryFilter.jsx';
import ProductGrid from '@/components/Shop/ProductGrid.jsx';
import PaginationControls from '@/components/common/PaginationControls.jsx';
import SearchBar from '@/components/common/SearchBar.jsx';
import SortFilter from '@/components/common/SortFilter.jsx';
import { useSearchParams } from 'react-router-dom';

export default function Shop() {
	const { allProducts: allProducts } = useContext(AppDataContext);
	const [searchParams] = useSearchParams();

	const initialCategory = searchParams.get('category') || 'all';
	const [selectedCategory, setSelectedCategory] = useState(initialCategory);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOption, setSortOption] = useState('default');

	const productsPerPage = 8;

	const filteredProducts = useMemo(() => {
		let result = selectedCategory === 'all'
				? [...allProducts]
				: allProducts.filter((p) => p.category === selectedCategory);

		if (searchTerm.trim()) {
			const term = searchTerm.toLowerCase();
			result = result.filter(p => p.title.toLowerCase().includes(term))
		}

		switch (sortOption) {
			case 'price-asc':
				result.sort((a, b) => a.price - b.price);
				break;
			case 'price-desc':
				result.sort((a, b) => b.price - a.price);
				break;
			case 'rating-desc':
				result.sort((a, b) => b.rating?.rate - a.rating?.rate);
				break;
			case 'alpha-asc':
				result.sort((a, b) => a.title.localeCompare(b.title));
				break;
			case 'alpha-desc':
				result.sort((a, b) => b.title.localeCompare(a.title));
				break;
		}

		return result;
	}, [allProducts, selectedCategory, searchTerm, sortOption]);

	
	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const paginatedProducts = useMemo(() => {
		const start = (currentPage - 1) * productsPerPage;
		return filteredProducts.slice(start, start + productsPerPage);
	}, [filteredProducts, currentPage]);

	useEffect(() => {
		const categoryFromUrl = searchParams.get('category') || 'all';
		setSelectedCategory(categoryFromUrl);
		setCurrentPage(1);
	}, [searchParams]);

	const hasError = !Array.isArray(allProducts);
	const isLoading = allProducts.length === 0;

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
					<div className={styles['filter-wrapper']}>
						<SearchBar
							value={searchTerm}
							onChange={handleSearchChange}
							placeholder='Search products...'
						/>
						<div className={styles['filter-controls']}>
							<div
								className={styles['filter-controls-container']}
							>
								<div>
									<p>Filter by:</p>
									<CategoryFilter
										selectedCategory={selectedCategory}
										onChange={handleCategoryChange}
									/>
								</div>
								<div>
									<p>Sort by:</p>
									<SortFilter
										value={sortOption}
										onChange={setSortOption}
									/>
								</div>
							</div>
						</div>
					</div>

					{isLoading ? (
						<p className={styles.loading}>Loading...</p>
					) : hasError ? (
						<p className={styles.loading}>Error loading products.</p>
					) : !paginatedProducts.length ? (
						<p className={styles.loading}>No products available</p>
					) : (
						<ProductGrid
							products={paginatedProducts}
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
