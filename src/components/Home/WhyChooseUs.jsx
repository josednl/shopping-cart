import styles from '@/styles/WhyChooseUs.module.css';
import ShippingIcon from '@/components/icons/shippingIcon.jsx';
import SupportIcon from '@/components/icons/supportIcon.jsx';
import QualityReportIcon from '@/components/icons/qualityIcon.jsx';
import SecureIcon from '@/components/icons/secureIcon.jsx';

export default function WhyChooseUs() {
	return (
		<section className={styles.section}>
			<div className={styles.overlay}>
				<div className={styles.container}>
					<div className={styles.content}>
						<p className={styles.title}>
							Why Shop With FakeShop?
						</p>
						<ul className={styles.features}>
							<li className={styles.feature}>
								<span className={styles.emoji}><ShippingIcon size='40' color='#ccc' /></span>
								Fast & Free Shipping on all orders
							</li>
							<li className={styles.feature}>
								<span className={styles.emoji}><SecureIcon size='40' color='#ccc' /></span>
								Secure Checkout & Payment
							</li>
							<li className={styles.feature}>
								<span className={styles.emoji}><SupportIcon size='40' color='#ccc' /></span>
								24/7 Customer Support
							</li>
							<li className={styles.feature}>
								<span className={styles.emoji}><QualityReportIcon size='40' color='#ccc' /></span>
								Quality-checked products only
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
