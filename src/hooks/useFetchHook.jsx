import { useState, useEffect } from 'react';

export default function useFetchHook(data, setData, fetchFn) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (data?.length) {
			setLoading(false);
			return;
		}

		const fetchData = async () => {
			try {
				const result = await fetchFn();
				setData(result);
			} catch (err) {
				setError('Failed to fetch data:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [data, setData, fetchFn]);

	return { loading, error };
}
