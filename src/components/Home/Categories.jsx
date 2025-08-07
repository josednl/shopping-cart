import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import styles from '@/styles/Categories.module.css';
import useFetchHook from '@/hooks/useFetchHook.jsx';
import { getCategories } from '@/services/fakeStoreService.js';
import { categoryDetails } from '@/utils/categoryData.js';

export default function Categories() {
	const { categories, setCategories } = useContext(AppDataContext);
	const { loading, error } = useFetchHook(categories, setCategories, () => getCategories());

	if (loading) return <p className={styles.loading}>Loading collections...</p>;

	if (error) return <p className={styles.loading}>{error}</p>;

	if (!categories.length) return <p className={styles.loading}>No categories available...</p>;

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
