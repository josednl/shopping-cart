import React from 'react';

export default function SearchBar({
	value,
	onChange,
	placeholder = 'Search...',
}) {
	return (
		<input
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			style={{
				width: '80%',
                padding: '8px 16px',
				fontSize: '16px',
				borderRadius: '5px',
				border: '1px solid #ccc',
			}}
		/>
	);
}
