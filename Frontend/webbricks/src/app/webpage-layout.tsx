import { Metadata } from 'next';
import NavBar from '@/components/landing-site/nav-bar/navbar';

function Layout({
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

export default Layout;
