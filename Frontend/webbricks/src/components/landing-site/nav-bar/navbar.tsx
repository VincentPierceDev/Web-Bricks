'use client';
import { useEffect, useState } from 'react';

import '../landing-globals.css';
import styles from './navbar.module.css';
import MobileToggleButton from './mobile-toggle-button';
import NavLink, { LinkType } from '@/components/general/server/link/route-link';
import Link from 'next/link';

export default function NavBar() {
	const [menuOpened, setMenuOpened] = useState(false);
	const handleMobileBtnClick = () => setMenuOpened(!menuOpened);

	useEffect(() => {
		document.body.classList.toggle('no-scroll', menuOpened);
	}, [menuOpened]);

	const LinkNames: string[] = ['About', 'Pricing', 'Docs', 'Blog'];

	return (
		<div id={styles['nav-background']}>
			<nav id={styles['nav-bar']} className='container'>
				<div id={styles['logo-wrapper']}>
					<Link href='/' id={styles['home-link']} prefetch={false}>
						<img
							className='full-image'
							src='/next.svg'
							alt='Webbricks business logo'
						/>
					</Link>
				</div>
				<MobileToggleButton
					toggle={() => handleMobileBtnClick()}
					state={menuOpened}
				/>
				<ul className={styles[`${menuOpened ? 'nav-list-open' : 'nav-list'}`]}>
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
							type={LinkType.Solid}
							prefetch={false}
						>
							Sign Up
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}
