'use client';
import { useEffect, useState } from 'react';

import '../landing-globals.css';
import styles from './navbar.module.css';
import MobileToggleButton from './mobile-toggle-button';
import NavLink, { LinkType } from '@/components/general/server/link/route-link';

export default function NavBar() {
	const [menuOpened, setMenuOpened] = useState(Boolean);

	useEffect(() => {
		console.log(menuOpened);
	}, [menuOpened]);

	const LinkNames: string[] = ['About', 'Pricing', 'Docs', 'Blog'];

	return (
		<nav id={styles['nav-bar']} className='container'>
			<div id={styles['logo-wrapper']}>
				<a href='/' id={styles['home-link']}>
					<img className='full-image' src='/next.svg' alt='' />
				</a>
			</div>
			<MobileToggleButton toggle={() => setMenuOpened(!menuOpened)} />
			<ul className={styles['nav-list']}>
				{
					//first and last li's have margins in the css that need to be updated
					//so make sure to update those id's if more links are added
					LinkNames.map((name: string, idx: number) => (
						<li
							key={`nav-key-${idx + 1}`}
							id={styles[`link-container-${idx + 1}`]}
							className={styles['nav-item']}
						>
							<NavLink
								id={styles[`navbar-link-${idx + 1}`]}
								extraClass={styles['link']}
								href={`/${name}`}
								type={LinkType.Text}
								prefetch={false}
							>
								{name}
							</NavLink>
						</li>
					))
				}
				<li id={styles['account-wrapper']}>
					<NavLink
						id={styles['login-link']}
						extraClass={styles['link']}
						href='/Login'
						type={LinkType.Text}
						prefetch={false}
					>
						Login
					</NavLink>
					<NavLink
						id={styles['signup-link']}
						extraClass={styles['link']}
						href='/Sign-Up'
						type={LinkType.Fancy}
						prefetch={false}
					>
						Sign Up
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
