const RightIcon = ({ size = '200', color = '#000', ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			color={color}
			viewBox='0 0 208 456'
			{...props}
		>
			<path
				fill='currentColor'
				d='M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34z'
			/>
		</svg>
	);
};

export default RightIcon;
