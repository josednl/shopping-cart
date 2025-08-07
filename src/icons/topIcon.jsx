const ChevronTopIcon = ({ size = '20', color = '#000', ...props }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			color={color}
			viewBox='0 0 32 32'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M30 20L16 8L2 20'
			></path>
		</svg>
	);
};

export default ChevronTopIcon;
