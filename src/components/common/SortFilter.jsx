import styles from '@/styles/Select.module.css';

export default function SortFilter({ value, onChange }) {
	return (
		<select
			value={value}
			className={styles.select}
			onChange={(e) => onChange(e.target.value)}
		>
			<option value='default'>Default</option>
			<option value='price-asc'>Price: Low to High</option>
			<option value='price-desc'>Price: High to Low</option>
			<option value='rating-desc'>Rating: High to Low</option>
			<option value='alpha-asc'>Alphabetical: A–Z</option>
			<option value='alpha-desc'>Alphabetical: Z–A</option>
		</select>
	);
}
