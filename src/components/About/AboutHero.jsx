import React from 'react';
import styles from '@/styles/AboutHero.module.css';

export default function AboutHero() {
    const imageUrl = '/images/christiann-koepke-dQyS2pMYtok-unsplash.jpg';

	return (
		<section className={styles['about-hero']}>
			<div className={styles.content}>
				<h1 className={styles.title}>Welcome to our store</h1>
				<h2 className={styles.subtitle}>Quality, price and trust</h2>
				<p className={styles.description}>We are a store committed to offering the best products at the best prices. Enjoy a fast, secure, and reliable shopping experience.</p>
			</div>
			<div className={styles['image-container']}>
				<img
					src={imageUrl}
					alt='Representative image of the store'
					className={styles.image}
				/>
			</div>
		</section>
	);
};
