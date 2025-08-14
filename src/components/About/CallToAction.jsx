import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/CallToAction.module.css';

export default function CallToAction() {
	return (
		<section className={styles.cta}>
			<div className={styles.content}>
				<div>
					<h2 className={styles.title}>
						Ready to find what you need?
					</h2>
					<p className={styles.subtitle}>
						Browse our collection and enjoy a better shopping
						experience.
					</p>
					<Link to='/shop' className={styles.button}>
						Shop Now
					</Link>
				</div>
			</div>
		</section>
	);
};
