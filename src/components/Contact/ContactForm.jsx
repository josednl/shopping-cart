import styles from '@/styles/ContactForm.module.css';

export default function ContactForm() {
	return (
		<section className={styles['contact-form']}>
			<h2 className={styles.title}>Send Us a Message</h2>
			<form className={styles.form}>
				<div className={styles['form-group']}>
					<label>
						Name*
						<input type='text' name='name' required />
					</label>

					<label>
						Email*
						<input type='email' name='email' required />
					</label>
				</div>

				<label>
					Subject
					<input type='text' name='subject' />
				</label>

				<label>
					Message*
					<textarea name='message' rows='5' required></textarea>
				</label>

				<button type='button'>Send</button>
			</form>
		</section>
	);
};
