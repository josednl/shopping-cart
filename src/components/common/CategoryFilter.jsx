import { useContext } from 'react';
import { AppDataContext } from '@/contexts/AppDataContext.jsx';

export default function CategoryFilter({ selectedCategory, onChange }) {
	const { categories } = useContext(AppDataContext);

	return (
		<div style={{ textAlign: 'center' }}>
			<select
				value={selectedCategory}
				style={{
					padding: '8px 16px',
					fontSize: '16px',
					borderRadius: '4px',
					border: '1px solid #ccc',
					backgroundColor: '#fff',
					cursor: 'pointer',
				}}
				onChange={(e) => onChange(e.target.value)}
			>
				<option value='all'>All Categories</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat.charAt(0).toUpperCase() + cat.slice(1)}
					</option>
				))}
			</select>
		</div>
	);
}
