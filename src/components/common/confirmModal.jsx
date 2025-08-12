import styles from '@/styles/ConfirmModal.module.css';

export default function ConfirmModal({ message, onConfirm, onCancel }) {
	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<p className={styles.message}>{message}</p>
				<div className={styles.actions}>
					<button onClick={onCancel} className={styles.cancel}>
						Cancel
					</button>
					<button onClick={onConfirm} className={styles.confirm}>
						Yes, Remove
					</button>
				</div>
			</div>
		</div>
	);
}
