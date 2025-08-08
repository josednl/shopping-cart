import StarIcon from '@/icons/fullStarIcon.jsx';
import StarHalfAltIcon from '@/icons/halfStarIcon.jsx';
import LineStarIcon from '@/icons/lineStarIcon.jsx';

export default function StarRating({ rating, max = 5 }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating - fullStars >= 0.5;
	const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

	const stars = [
		...Array(fullStars).fill('full'),
		...(hasHalfStar ? ['half'] : []),
		...Array(emptyStars).fill('empty'),
	];

	return (
		<div style={{ display: 'flex', gap: '2px' }}>
			{stars.map((type, index) => {
				if (type === 'full')
					return (
						<span key={index}>
							<StarIcon size='15' color='#f5c518' />
						</span>
					);
				if (type === 'half')
					return (
						<span key={index}>
							<StarHalfAltIcon size='15' color='#f5c518' />
						</span>
					);
				return (
					<span key={index}>
						<LineStarIcon size='15' color='#f5c518' />
					</span>
				);
			})}
		</div>
	);
}
