import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/Categories.module.css';
import { getCategories } from '@/components/services/productService.js';
import { categoryDetails } from '@/components/utils/categoryData.js';

export default function Categories() {
	const [categories, setCategories] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getCategories();
				setCategories(data);
			} catch (err) {
				setError('Failed to load categories:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading)
		return <p className={styles.loading}>Loading collections...</p>;

	if (error) return <p className={styles.loading}>{error}</p>;

	if (!categories.length)
		return <p className={styles.loading}>No categories available...</p>;

	return (
		<section className={styles.collections}>
			<div className={styles.container}>
				<p className={styles.title}>Explore Our Collections</p>
				<div className={styles.grid}>
					{categories.map((category) => {
						const details = categoryDetails[category] || {};
						return (
							<Link
								to={`/category/${encodeURIComponent(category)}`}
								key={category}
								className={styles.card}
							>
								<img
									src={details.image}
									alt={category}
									className={styles.image}
								/>
								<div className={styles.content}>
									<h3 className={styles.categoryName}>
										{category.charAt(0).toUpperCase() +
											category.slice(1)}
									</h3>
									<p className={styles.description}>
										{details.description ||
											'Discover great products'}
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
