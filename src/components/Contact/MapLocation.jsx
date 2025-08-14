import React from 'react';
import styles from '@/styles/MapLocation.module.css';
import WhatAppIcon from '@/icons/whatsappIcon.jsx';
import TwitterIcon from '@/icons/twitterIcon.jsx';
import FacebookIcon from '@/icons/facebookIcon.jsx';
import InstagramIcon from '@/icons/instagramIcon.jsx';

const SOCIAL_MEDIA = [
	{
		name: 'Facebook',
		username: '@username',
		bgColor: '#1877f2',
		Icon: <FacebookIcon size='40' color='#fff' />,
	},
	{
		name: 'Instagram',
		username: '@username',
		bgGradient:
			'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
		Icon: <InstagramIcon size='40' color='#fff' />,
	},
	{
		name: 'Twitter',
		username: '@username',
		bgColor: '#00acee',
		Icon: <TwitterIcon size='40' color='#fff' />,
	},
	{
		name: 'WhatsApp',
		username: '@username',
		bgColor: '#25d366',
		Icon: <WhatAppIcon size='40' color='#fff' />,
	},
];

export default function MapLocation() {
	const embedUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019105431166!2d-122.40100418467978!3d37.79362837975662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b1c6b9c5%3A0xf3b1ec1c2d2e3a9!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus';

	return (
		<section className={styles['map-location']}>
			<div className={styles.container}>
				<h2 className={styles.title}>Our Location</h2>
				<div className={styles['map-container']}>
					<iframe
						src={embedUrl}
						width='100%'
						height='400'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Google Map Location'
					></iframe>
				</div>
			</div>

			<div className={styles.socials}>
				<div className={styles['social-boxes']}>
					<h3 className={styles.title}>Connect with us</h3>
					{SOCIAL_MEDIA.map(
						({ name, username, bgColor, bgGradient, Icon }) => {
							const background = bgGradient || bgColor;

							return (
								<div
									className={styles['social-box']}
									key={name}
								>
									<span
										className={styles['social-icon']}
										style={{ background }}
									>
										{Icon}
									</span>
									<p
										className={styles.username}
									>
										{username}
									</p>
								</div>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
}
