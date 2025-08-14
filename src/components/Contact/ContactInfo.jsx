import React from 'react';
import styles from '@/styles/ContactInfo.module.css';

const ContactInfo = () => {
	const contact = {
		phone: '+1 (555) 123-4567',
		email: 'support@example.com',
		address: '123 Commerce St, New York, NY 10001, USA',
		hours: 'Mon – Fri: 9:00 AM – 6:00 PM',
	};
	return (
		<section className={styles['contact-info']}>
			<h2 className={styles.title}>Contact Information</h2>
			<div className={styles.items}>
				<div className={styles.item}>
					<span className={styles.label}>Phone:</span>
					<a href={`tel:${contact.phone}`} className={styles.link}>
						{contact.phone}
					</a>
				</div>
				<div className={styles.item}>
					<span className={styles.label}>Email:</span>
					<a className={styles.link}>
						{contact.email}
					</a>
				</div>
				<div className={styles.item}>
					<span className={styles.label}>Address:</span>
					<p className={styles.text}>{contact.address}</p>
				</div>
				<div className={styles.item}>
					<span className={styles.label}>Business Hours:</span>
					<p cclassName={styles.text}>{contact.hours}</p>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
