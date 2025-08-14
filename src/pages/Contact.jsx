import styles from '@/styles/Contact.module.css';
import ContactHero from '../components/Contact/ContactHero.jsx';
import ContactInfo from '@/components/Contact/ContactInfo.jsx';
import ContactForm from '@/components/Contact/ContactForm.jsx';
import MapLocation from '@/components/Contact/MapLocation.jsx';

export default function Contact() {
	return (
		<div className={styles.contact}>
			<div className={styles.hero}>
				<div className={styles.overlay}>
					<h2 className={styles.title}>Contact</h2>
				</div>
			</div>
			<ContactHero />
			<div className={styles['contact-options']}>
				<ContactInfo />
				<ContactForm />
			</div>
			<MapLocation />
		</div>
	);
}
