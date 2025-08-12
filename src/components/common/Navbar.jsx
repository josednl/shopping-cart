import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@/styles/Navbar.module.css';
import CartIcon from '@/icons/cartIcon.jsx';
import { useCart } from '@/contexts/CartContext.jsx';

export default function Navbar () {
	const [menuOpen, setMenuOpen] = useState(false);
	const { cartItems, toggleCart } = useCart();
	const location = useLocation();
	const cartCount = cartItems.length;

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav
			className={`${styles.navbar} ${
				menuOpen ? styles['menu-open'] : ''
			}`}
		>
			<div className={styles.container}>
				<div className={styles['navbar-left']}>
					<h1 className={styles.logo}>FakeShop</h1>
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
					<Link to='#' onClick={toggleCart} className={styles['cart-icon']}>
						<CartIcon size='25' color='#ffffff' />
						{cartCount > 0 && (
							<span className={styles['cart-count']}>
								{cartCount}
							</span>
						)}
					</Link>
				</div>
			</div>
		</nav>
	);
}
