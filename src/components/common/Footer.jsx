import styles from '@/styles/Footer.module.css';
import { Link } from 'react-router-dom';
import TwitterIcon from '@/components/icons/twitterIcon.jsx';
import FacebookIcon from '@/components/icons/facebookIcon.jsx';
import InstagramIcon from '@/components/icons/instagramIcon.jsx';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.section}>
					<h2 className={styles.logo}>FakeShop</h2>
					<p className={styles.description}>
						Your one-stop shop for electronics, fashion and more.
					</p>
				</div>
				<div className={styles.section}>
					<h3 className={styles['section-title']}>Quick Links</h3>
					<ul className={styles.links}>
						<li>
							<Link to='/' className={styles['link-option']}>Home</Link>
						</li>
						<li>
							<Link to='/about' className={styles['link-option']}>About</Link>
						</li>
						<li>
							<Link to='/shop' className={styles['link-option']}>Shop</Link>
						</li>
						<li>
							<Link to='/contact' className={styles['link-option']}>Contact</Link>
						</li>
					</ul>
				</div>
				<div className={styles.section}>
					<h3 className={styles['section-title']}>Follow Us</h3>
					<div className={styles.socials}>
						<Link
							to='https://twitter.com'
                            className={styles['social-option']}
							target='_blank'
							rel='noreferrer'
							title='Twitter'
						>
							<TwitterIcon color='#ccc' />
						</Link>
						<Link
							to='https://facebook.com'
                            className={styles['social-option']}
							target='_blank'
							rel='noreferrer'
							title='Facebook'
						>
							<FacebookIcon color='#ccc' />
						</Link>
						<Link
							to='https://instagram.com'
                            className={styles['social-option']}
							target='_blank'
							rel='noreferrer'
							title='Instagram'
						>
							<InstagramIcon color='#ccc' />
						</Link>
					</div>
				</div>
			</div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} FakeShop. All rights reserved.</p>
            </div>
		</footer>
	);
}
