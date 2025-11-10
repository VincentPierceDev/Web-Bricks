import Layout from '../transition-layout';

export default function Login() {
	const title: string = 'Blog • Webbricks';
	const description: string = 'Keep up with our latest news';
	return (
		<Layout metaData={{ title: title, description: description }}>
			<h1>Blog Page</h1>
			<a href='/'>Home</a>
		</Layout>
	);
}
