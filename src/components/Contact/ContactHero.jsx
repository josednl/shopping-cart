import React from 'react';
import styles from '@/styles/ContactHero.module.css';

export default function AboutHero() {
	return (
		<section className={styles['contact-hero']}>
			<h1 className={styles.title}>We'd love to hear from you</h1>
			<p className={styles.text}>
				Reach out with questions, suggestions, or just to say hi.
			</p>
		</section>
	);
}
