import styles from '@/styles/About.module.css';
import AboutHero from '@/components/About/AboutHero.jsx';
import OurMission from '@/components/About/OurMission.jsx';
import Testimonials from '@/components/About/Testimonials.jsx';
import CallToAction from '@/components/About/CallToAction';

export default function About() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.overlay}>
					<h2 className={styles.title}>About Us</h2>
				</div>
			</div>
			<AboutHero />
			<OurMission />
            <Testimonials />
			<CallToAction />
		</>
	);
}
