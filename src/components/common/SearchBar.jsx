import { useState } from 'react';
import styles from '@/styles/SearchBar.module.css';
import SearchIcon from '@/icons/searchIcon.jsx';

export default function SearchBar({
	value,
	onChange,
	placeholder = 'Search...',
}) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className={styles['search-wrapper']}>
			<button
				className={styles['search-toggle']}
				onClick={() => setExpanded((prev) => !prev)}
			>
				<SearchIcon />
			</button>

			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={`${styles['search-input']} ${
					expanded ? styles.expanded : ''
				}`}
			/>
		</div>
	);
}
