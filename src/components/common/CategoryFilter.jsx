import { useContext } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';
import styles from '@/styles/Select.module.css';

export default function CategoryFilter({ selectedCategory, onChange }) {
	const { categories } = useContext(AppDataContext);

	return (
		<select
			value={selectedCategory}
			className={styles.select}
			onChange={(e) => onChange(e.target.value)}
		>
			<option value='all'>All Categories</option>
			{categories.map((cat) => (
				<option key={cat} value={cat}>
					{cat.charAt(0).toUpperCase() + cat.slice(1)}
				</option>
			))}
		</select>
	);
}
