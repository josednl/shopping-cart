import { useState } from 'react';
import { useCart } from '@/contexts/CartContext.jsx';

export default function useConfirmRemoval() {
	const [showConfirm, setShowConfirm] = useState(false);
	const [productToRemove, setProductToRemove] = useState(null);
	const { removeProduct, decreaseQuantity } = useCart();

	const handleRemoveProduct = (product) => {
		setProductToRemove(product);
		setShowConfirm(true);
	};

	const confirmRemove = () => {
		if (productToRemove) {
			removeProduct(productToRemove.id);
		}
		setShowConfirm(false);
		setProductToRemove(null);
	};

	const cancelRemove = () => {
		setShowConfirm(false);
		setProductToRemove(null);
	};

	const handleDecreaseWithConfirm = (item) => {
		if (item.quantity === 1) {
			handleRemoveProduct(item);
		} else {
			decreaseQuantity(item.id);
		}
	};

	return {
		showConfirm,
		productToRemove,
		handleRemoveProduct,
		handleDecreaseWithConfirm,
		confirmRemove,
		cancelRemove,
	};
}
