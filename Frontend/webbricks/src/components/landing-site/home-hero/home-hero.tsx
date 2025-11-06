'use client';
import { useState, useEffect, useRef, ReactElement } from 'react';
import style from './home-hero.module.css';
import Link, { LinkType } from '@/components/general/server/link/route-link';

export default function HomeHero() {
	let currentIndex = useRef<number>(0);
	const loopSpeed: number = 3500;

	const belongingList: any = [
		<strong className={style['heading-text']}>Code</strong>,
		<strong className={style['heading-text']}>Components</strong>,
		<strong className={style['heading-text']}>Way</strong>,
	];

	const [currentBelonging, setCurrentBelonging] = useState<ReactElement | null>(belongingList[0]);

	//update the looping text
	useEffect(() => {
		const textLoop: NodeJS.Timeout = setInterval(() => {
			setCurrentBelonging(belongingList[currentIndex.current]);
			currentIndex.current =
				currentIndex.current == belongingList.length - 1 ? 0 : ++currentIndex.current;
		}, loopSpeed);

		return () => clearInterval(textLoop);
	}, []);

	return (
		<section id={style['hero-section']} className='section'>
			<div className='container'>
				<div className={style['text-content']}>
					<div className={style['heading-wrapper']}>
						<span className={style['heading-text']}>Your </span>
						<br className={style['heading-split']} />
						{currentBelonging}
						{/*remove comma from being strong*/}
						<span className={style['heading-text']}>,</span>
					</div>
					<h1 className={style['subheading-text']}>
						Webricks turns your frontend components into a visual library
					</h1>
					<div className={style['link-wrapper']}>
						<Link
							id={style['get-started-link']}
							extraClass=''
							type={LinkType.Fancy}
							href='/Sign-Up'
						>
							<span className='title'>Get Started</span>
						</Link>
						<Link id={style['learn-more-link']} type={LinkType.Ghost} href='/about'>
							<span className='title'>Learn More</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
