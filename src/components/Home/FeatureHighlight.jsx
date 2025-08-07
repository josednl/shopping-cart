import styles from '@/styles/FeatureHighlight.module.css';

export default function FeatureHighlight() {
	return (
		<section className={styles.highlight}>
			<div className={styles.overlay}>
				<div className={styles.container}>
					<div className={styles.content}>
						<p className={styles.title}>Timeless Elegance</p>
						<p className={styles.subtitle}>
							Explore our exclusive Fall Collection 2025
						</p>
						<p className={styles.description}>
							Crafted with precision and passion, each piece in
							our new collection blends classic style with modern
							comfort. Discover fashion that speaks to who you
							are.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
