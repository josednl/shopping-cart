import React, { useEffect, useState } from 'react';
import styles from '@/styles/BackToTopButton.module.css';
import ChevronTopIcon from '@/icons/topIcon.jsx';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return isVisible ? (
		<button
			className={styles.button}
			onClick={scrollToTop}
			aria-label='Back to top'
		>
			<ChevronTopIcon size='20' color='#fff' />
		</button>
	) : null;
};

export default BackToTopButton;
