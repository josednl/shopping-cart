import styles from '@/styles/HeroSection.module.css';
import { Link } from 'react-router-dom';

export default function HeroSection() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h1 className={styles.title}>Shop the Best Deals Online</h1>
				<p className={styles.subtitle}>
					All your favorite brands, all in one place
				</p>
				<Link to='/shop'>
					<button className={styles.explore}>Explore Now</button>
				</Link>
			</div>
		</section>
	);
}
