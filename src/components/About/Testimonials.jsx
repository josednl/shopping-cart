import React from 'react';
import styles from '@/styles/Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
		{
			name: 'Carlos M.',
			feedback:
				'The best service I\'ve ever received from an online store. Fast, reliable, and with excellent customer service.',
			image: '/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg',
		},
		{
			name: 'Laura P.',
			feedback:
				'The products arrived in perfect condition. I will definitely buy again.',
			image: '/images/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg',
		},
		{
			name: 'Andre G.',
			feedback:
				'A very smooth shopping experience. The quality exceeded my expectations.',
			image: '/images/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg',
		},
	];

	return (
		<section className={styles.testimonials}>
			<div className={styles.header}>
				<h2 className={styles.title}>What our customers say</h2>
				<p className={styles.subtitle}>Real opinions from those who trust us</p>
			</div>
			<div className={styles.list}>
				{testimonials.map((testimonial, index) => (
					<div className={styles.testimonial} key={index}>
						<img
							src={testimonial.image}
							alt={`${testimonial.name} image`}
							className={styles.image}
						/>
						<p className={styles.feedback}>
							“{testimonial.feedback}”
						</p>
						<p className={styles.name}>
							— {testimonial.name}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};
