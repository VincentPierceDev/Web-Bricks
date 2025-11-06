import React from 'react';
import { describe, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/components/landing-site/nav-bar/navbar';

function resizeWindow(x: number = 1024, y: number = 768) {
	window.innerWidth = x;
	window.innerHeight = y;
	window.dispatchEvent(new Event('resize'));
}

describe('Navbar', () => {
	it('should appear on page', () => {
		const { container } = render(<NavBar />);
		const navElement = container.querySelector('nav');
		expect(navElement).toBeInTheDocument();
	});

	describe('Mobile Button', () => {
		let navButton: HTMLElement | null;

		it('should be visible at 1024 width and below', () => {
			resizeWindow(1023, 800);
			const { container } = render(<NavBar />);
			navButton = container.querySelector(
				'#mtb-module__8iiAyW__mobile-nav-btn'
			);
			expect(navButton).toHaveStyle('display: flex');
		});

		it('should be hidden 1024 width and above', () => {
			resizeWindow(1025, 800);
			render(<NavBar />);
			navButton = screen.getByTestId('mobile-nav-btn');
			expect(navButton).toHaveStyle('display: none');
		});
	});
});
