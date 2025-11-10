import Layout from '../transition-layout';

export default function Login() {
	const title: string = 'Docs • Webbricks';
	const description: string = 'Learn more about our app';
	return (
		<Layout metaData={{ title: title, description: description }}>
			<h1>Docs Page</h1>
			<a href='/'>Home</a>
		</Layout>
	);
}
