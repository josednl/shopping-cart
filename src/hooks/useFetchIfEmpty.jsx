import { useState, useEffect } from 'react';

export default function useFetchIfEmpty(data, setData, fetchFn) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const shouldFetch = !Array.isArray(data) || data.length === 0;

		if (!shouldFetch) {
			setLoading(false);
			return;
		}

		const fetchData = async () => {
			try {
				const result = await fetchFn();
				setData(result);
			} catch (err) {
				setError(`Failed to fetch data: ${err.message}`);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [data, setData, fetchFn]);

	return { loading, error };
}
