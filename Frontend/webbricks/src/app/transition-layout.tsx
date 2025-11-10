/***** NOTE NOTE NOTE NOTE *********/
/* This Layout is for one off pages that aren't meant for the actual app or website */
/* Stuff like Login, Sign Up, 404, etc */
/***** NOTE NOTE NOTE NOTE *********/

import { Metadata } from 'next';
import Favicon from '@/assets/favicon.ico';

export default function Layout({
	children,
	metaData,
}: {
	children: React.ReactNode;
	metaData: Metadata;
}) {
	return (
		<html lang='en'>
			<head>
				<title>{metaData.title?.toString()}</title>
				<meta name='description' content={metaData.description?.toString()} />
				<link rel='icon' href={Favicon.src} type='image/x-icon' />
			</head>
			<body>
				<header></header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
