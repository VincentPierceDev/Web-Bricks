'use client';
import { useState, useEffect, useRef, RefObject } from 'react';
import { Canvas } from '@react-three/fiber';
import style from './home-hero.module.css';
import Link, { LinkType } from '@/components/general/server/link/route-link';

interface Props {
	textLoopDelay: number;
}

export default function HomeHero(Props: Props) {
	const [currentTransition, setCurrentTransition] = useState<string>(style['use-text-enter']);

	//elements that are swapped
	type displayTextColor<first, second> = {
		text: first;
		color: second;
	};

	const replacementList: displayTextColor<string, string>[] = [
		{ text: 'Code', color: style['accent-glow'] },
		{ text: 'Bricks', color: style['highlight-glow'] },
		{ text: 'Way', color: style['tertiary-glow'] },
	];

	const [currentReplacement, setCurrentReplacement] = useState<displayTextColor<string, string>>(
		replacementList[0]
	);

	let currentIndex: RefObject<number> = useRef<number>(0);
	const loopSpeed: number = Props.textLoopDelay;
	const transitionDelay: number = loopSpeed - 300;

	//update the looping text
	useEffect(() => {
		const textSwapLoop: NodeJS.Timeout = setInterval(() => {
			setCurrentTransition(style['use-text-enter']);
			setCurrentReplacement(replacementList[currentIndex.current]);
			currentIndex.current = (currentIndex.current + 1) % replacementList.length;

			//add the exit class effect
			const swapEffect: NodeJS.Timeout = setTimeout(() => {
				setCurrentTransition(style['use-text-exit']);
			}, transitionDelay);

			return () => clearInterval(swapEffect);
		}, loopSpeed);

		return () => clearInterval(textSwapLoop);
	}, [loopSpeed]);

	return (
		<section id={style['hero-section']} className='section'>
			<div id={style['content-container']} className='container'>
				<div className={style['text-content']}>
					<div className={style['heading-wrapper']}>
						<span className={style['heading-text']}>Your </span>
						<br className={style['heading-split']} />
						<strong
							className={`${style['heading-text']} ${currentTransition} ${currentReplacement.color}`}
						>
							{currentReplacement.text}
						</strong>
					</div>
					<h1 className={style['subheading-text']}>
						Web-bricks turns your frontend components into a visual library
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
				<div id={style['canvas-container']}>
					<Canvas>
						<mesh>
							<boxGeometry />
							<meshStandardMaterial />
						</mesh>
					</Canvas>
				</div>
			</div>
		</section>
	);
}

HomeHero.defaultProps = {
	textLoopDelay: 1500,
};
