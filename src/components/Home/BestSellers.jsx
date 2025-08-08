import { useRef, useContext } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import styles from '@/styles/BestSellers.module.css';
import LeftIcon from '@/icons/leftIcon.jsx';
import RightIcon from '@/icons/rightIcon.jsx';
import ProductCard from '@/components/common/ProductCard.jsx';

export default function BestSellers() {
	const { bestSellers } = useContext(AppDataContext);
	const carouselRef = useRef(null);

	if (!bestSellers || !bestSellers.length) {
		return <p className={styles.loading}>Loading collections...</p>;
	}

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
						{bestSellers.map((item) => (
							<ProductCard 
								key={item.id}
								product={item}
								
							/>
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
