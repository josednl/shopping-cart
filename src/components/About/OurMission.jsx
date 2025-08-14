import React from 'react';
import styles from '@/styles/OurMission.module.css';

const values = [
	{
		title: 'Quality guaranteed',
		description:
			'We ensure every product meets the highest standards before it reaches your hands.',
	},
	{
		title: 'Fast and secure shipping',
		description:
			'Your orders are delivered promptly and safely, wherever you are.',
	},
	{
		title: 'Exceptional customer service',
		description: 'Our support team is here for you every step of the way.',
	},
	{
		title: 'Commitment to sustainability',
		description:
			'We prioritize eco-friendly practices in everything we do.',
	},
];

export default function OurMission() {
	return (
		<section className={styles['our-mission']}>
			<div className={styles.container}>
				<h2 className={styles.title}>Our Mission</h2>
				<p className={styles.statement}>
					Empowering people through accessible, sustainable, and
					quality products. We strive to make every purchase a
					positive experience.
				</p>
				<div className={styles.values}>
					{values.map((value, index) => (
						<div
							key={index}
							className={styles.card}
						>
							<h3 className={styles['card-title']}>
								{value.title}
							</h3>
							<p
								className={
									styles['card-description']
								}
							>
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
