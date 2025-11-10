import { useEffect, useState } from 'react';

export default function useIsSlimmerThan(width: number): boolean {
	const [screenSize, setScreenSize] = useState(0);

	const UpdateSize = () => setScreenSize(window.innerWidth);
	useEffect(() => {
		UpdateSize(); //initial set
		window.addEventListener('resize', UpdateSize);
		return () => window.removeEventListener('resize', UpdateSize);
	});

	return screenSize <= width;
}
