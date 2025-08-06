import { useState, useEffect, useRef } from 'react';
import { getProducts } from '@/components/services/productService.js';
import styles from '@/styles/BestSellers.module.css';
import LeftIcon from '@/components/icons/leftIcon.jsx';
import RightIcon from '@/components/icons/rightIcon.jsx';

export default function BestSellers() {
	const [products, setProducts] = useState([]);
	const carouselRef = useRef(null);

	useEffect(() => {
		getProducts(10).then((data) => {
			setProducts(data);
		});
	}, []);

	const scroll = (direction) => {
		const container = carouselRef.current;
		const scrollAmount = 266;

		if (direction === 'left') {
			container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		} else {
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	if (!products.length) {
		return <p className={styles.loading}>Loading best sellers...</p>;
	}

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
