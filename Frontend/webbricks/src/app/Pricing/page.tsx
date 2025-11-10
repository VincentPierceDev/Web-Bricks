import Layout from '../transition-layout';

export default function Pricing() {
	const title: string = 'Prices • Webbricks';
	const description: string = 'Check out the prices';
	return (
		<Layout metaData={{ title: title, description: description }}>
			<h1>Prices Page</h1>
			<a href='/'>Home</a>
		</Layout>
	);
}
