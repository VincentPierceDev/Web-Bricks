'use client';
import { useState, useEffect, useRef, RefObject, MouseEventHandler, Component } from 'react';
import { Canvas } from '@react-three/fiber';
import style from './home-hero.module.css';
import Link, { LinkType } from '@/components/general/server/link/route-link';
import useIsSlimmerThan from '@/hooks/use-is-screen-sizes';
import Model, { transform } from './model';

interface Props {
	textLoopDelay: number;
}

export default function HomeHero(Props: Props) {
	//just start with mobile by default in case of underlying issues
	let isMobile: boolean = useIsSlimmerThan(1024);

	return (
		<section id={style['hero-section']} className='section'>
			<div id={style['content-container']} className='container'>
				{MainContent(Props.textLoopDelay)}
				{isMobile ? <MobileHTMLDisplay /> : <ThreeScene />}
			</div>
		</section>
	);
}

HomeHero.defaultProps = {
	textLoopDelay: 1500,
};

//the text, buttons, words and stuff
function MainContent(textLoopDelay: number) {
	const [currentTransition, setCurrentTransition] = useState<string>(style['use-text-enter']);

	//elements that are swapped for the text
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
	const loopSpeed: number = textLoopDelay;
	const transitionDelay: number = loopSpeed - 300;

	//this may need to be a custom hook later for swapping stuff, but currently not doing it
	//update the looping text
	useEffect(() => {
		const textSwapLoop: NodeJS.Timeout = setInterval(() => {
			setCurrentTransition(style['use-text-enter']);
			setCurrentReplacement(replacementList[currentIndex.current]);
			currentIndex.current = (currentIndex.current + 1) % replacementList.length;

			//add the exit class effect (the drop down and lift up)
			const swapEffect: NodeJS.Timeout = setTimeout(() => {
				setCurrentTransition(style['use-text-exit']);
			}, transitionDelay);

			return () => clearInterval(swapEffect);
		}, loopSpeed);

		return () => clearInterval(textSwapLoop);
	}, [loopSpeed]);

	return (
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
				<Link id={style['get-started-link']} extraClass='' type={LinkType.Fancy} href='/Sign-Up'>
					<span className='title'>Get Started</span>
				</Link>
				<Link id={style['learn-more-link']} type={LinkType.Ghost} href='/about'>
					<span className='title'>Learn More</span>
				</Link>
			</div>
		</div>
	);
}

//If this never gets called then react three will never be setup
//so mobile optimizations should work
function ThreeScene() {
	const [modelRotation, setModelRotation] = useState<number>(80);
	const rotateTimeout = useRef<NodeJS.Timeout>(null);

	//transform is from model.tsx
	const HTMLTransform: transform = {
		position: [0, -1.5, 0],
		rotation: [0, modelRotation, 0],
		scale: [1.3, 1.3, 1.3],
	};

	const ConstantRotate = () => {
		setModelRotation(modelRotation + 0.01);
		console.log('should be rotating');
	};

	const RotateWithMouse = (event: any) => {
		console.log('mouse over');
		setModelRotation(70);
		rotateTimeout.current = setInterval(ConstantRotate, 200);
	};

	const StopRotatingWithMouse = (event: any) => {
		console.log('mouse leave');
		//setModelRotation(80);

		if (rotateTimeout.current) {
			//clearInterval(rotateTimeout.current);
		}
	};

	return (
		<div
			id={style['canvas-container']}
			onMouseEnter={RotateWithMouse}
			onMouseLeave={StopRotatingWithMouse}
		>
			<Canvas>
				<ambientLight intensity={5} color='#FFFFFF' />

				<Model gltfPath='/three-js/HTML3DIcon.gltf' transform={HTMLTransform} />
			</Canvas>
		</div>
	);
}

function MobileHTMLDisplay() {
	return (
		<div id={style['mobile-html-icon-container']}>
			<span>&gt;&gt;Test Content Mobile&lt;&lt;</span>
		</div>
	);
}
