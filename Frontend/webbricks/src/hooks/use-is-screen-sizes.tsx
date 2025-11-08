import { useEffect, useState } from 'react';

export default function useIsSlimmerThan(width: number): boolean {
	let windowWidth: number = window.innerWidth;
	const [screenSize, setScreenSize] = useState(windowWidth);

	const UpdateSize = () => setScreenSize(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', UpdateSize);
		return () => window.removeEventListener('resize', UpdateSize);
	});

	return screenSize <= width;
}
