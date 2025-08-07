import { useRef, useContext } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import { getProducts } from '@/services/fakeStoreService.js';
import useFetchHook from '@/hooks/useFetchHook.jsx';
import styles from '@/styles/BestSellers.module.css';
import LeftIcon from '@/icons/leftIcon.jsx';
import RightIcon from '@/icons/rightIcon.jsx';
import StarRating from '@/components/common/starRating.jsx';

export default function BestSellers() {
	const { products, setProducts } = useContext(AppDataContext);
	const { loading, error } = useFetchHook(products, setProducts, () => getProducts(10));
	const carouselRef = useRef(null);

	if (loading) return <p className={styles.loading}>Loading best sellers...</p>;

	if (error) return <p className={styles.loading}>{error}</p>;

	if (!products.length) return <p className={styles.loading}>No best sellers available...</p>;

	const scroll = (direction) => {
		const container = carouselRef.current;
		const scrollAmount = 250;

		if (direction === 'left') {
			container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		} else {
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<section className={styles['best-sellers']}>
			<div className={styles.container}>
				<p className={styles.title}>Best Sellers</p>
				<div className={styles['carousel-wrapper']}>
					<button
						className={styles.navButton}
						onClick={() => scroll('left')}
					>
						<LeftIcon size='20' />
					</button>
					<div className={styles.carousel} ref={carouselRef}>
						{products.map((item) => (
							<div className={styles.card} key={item.id}>
								<div className={styles['card__header']}>
									<img
										src={item.image}
										alt={item.title}
										className={styles.image}
									/>
								</div>
								<div className={styles['card__footer']}>
									<p
										className={styles.name}
										title={item.title}
									>
										{item.title}
									</p>
									<p className={styles.category}>
										{item.category}
									</p>
									<div className={styles.rating}>
										<StarRating rating={item.rating.rate} />
										<p className={styles['rating-count']}>
											({item.rating.count})
										</p>
									</div>
									<div className={styles.description}>
										<p className={styles.price}>
											${item.price}
										</p>
										<button className={styles.button}>
											Add to Cart
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<button
						className={styles.navButton}
						onClick={() => scroll('right')}
					>
						<RightIcon size='20' />
					</button>
				</div>
			</div>
		</section>
	);
}
