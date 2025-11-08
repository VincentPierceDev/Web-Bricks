import { Metadata } from 'next';
import NavBar from '@/components/landing-site/nav-bar/navbar';
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
				<header>
					<NavBar />
				</header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
