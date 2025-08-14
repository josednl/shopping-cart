import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes.jsx';
import { AppDataProvider } from '@/contexts/AppDataProvider.jsx';
import { CartProvider } from '@/contexts/CartProvider.jsx';

describe('AppRoutes', () => {
	it('renders HomePage by default', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<AppDataProvider>
					<CartProvider>
						<AppRoutes />
					</CartProvider>
				</AppDataProvider>
			</MemoryRouter>
		);

		expect(screen.getByText(/shop the best deals/i)).toBeInTheDocument();
	});

	it('renders Shop page', () => {
		render(
			<MemoryRouter initialEntries={['/shop']}>
				<AppDataProvider>
					<CartProvider>
						<AppRoutes />
					</CartProvider>
				</AppDataProvider>
			</MemoryRouter>
		);

		expect(screen.getByText(/shop/i)).toBeInTheDocument();
	});
});
