export default function SortFilter({ value, onChange }) {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			style={{
				padding: '8px 16px',
				fontSize: '16px',
				borderRadius: '4px',
				border: '1px solid #ccc',
				backgroundColor: '#fff',
				cursor: 'pointer',
			}}
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
