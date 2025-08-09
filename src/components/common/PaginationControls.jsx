import styles from '@/styles/PaginationControls.module.css'

export default function PaginationControls({ currentPage, totalPages, onNext, onPrev }) {
	return (
		<div className={styles.pagination}>
			<button onClick={onPrev} disabled={currentPage === 1}>
				&#8592;
			</button>
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<button onClick={onNext} disabled={currentPage === totalPages}>
				&#8594;
			</button>
		</div>
	);
}
