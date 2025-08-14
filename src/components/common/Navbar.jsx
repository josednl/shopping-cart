import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@/styles/Navbar.module.css';
import CartIcon from '@/icons/cartIcon.jsx';
import { useCart } from '@/contexts/CartContext.jsx';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { toggleCart, totalItems } = useCart();
	const location = useLocation();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	const handleNavLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<nav
			className={`${styles.navbar} ${
				menuOpen ? styles['menu-open'] : ''
			}`}
		>
			<div className={styles.container}>
				<div className={styles['navbar-left']}>
					<Link to='/' className={styles.logo}>
						FakeShop
					</Link>
				</div>
				<button
					className={styles['menu-toggle']}
					onClick={toggleMenu}
					aria-label='Toggle menu'
				>
					<span className={styles['menu-icon']}></span>
				</button>
				<div
					className={`${styles['navbar-right']} ${
						menuOpen ? styles.open : ''
					}`}
				>
					<ul className={styles['nav-links']}>
						<li>
							<Link
								to='/'
								onClick={handleNavLinkClick}
								className={`${styles['nav-option']} ${
									location.pathname === '/'
										? styles.active
										: ''
								}`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='/about'
								onClick={handleNavLinkClick}
								className={`${styles['nav-option']} ${
									location.pathname === '/about'
										? styles.active
										: ''
								}`}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to='/shop'
								onClick={handleNavLinkClick}
								className={`${styles['nav-option']} ${
									location.pathname === '/shop'
										? styles.active
										: ''
								}`}
							>
								Shop
							</Link>
						</li>
						<li>
							<Link
								to='/contact'
								onClick={handleNavLinkClick}
								className={`${styles['nav-option']} ${
									location.pathname === '/contact'
										? styles.active
										: ''
								}`}
							>
								Contact
							</Link>
						</li>
					</ul>
					<Link
						to='#'
						onClick={toggleCart}
						className={styles['cart-icon']}
					>
						<CartIcon size='25' color='#ffffff' />
						{totalItems > 0 && (
							<span className={styles['cart-count']}>
								{totalItems}
							</span>
						)}
					</Link>
				</div>
			</div>
		</nav>
	);
}
