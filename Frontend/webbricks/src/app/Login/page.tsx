import Layout from '../transition-layout';

export default function Login() {
	const title: string = 'Login • Webbricks';
	const description: string = 'Login to your account';
	return (
		<Layout metaData={{ title: title, description: description }}>
			<h1>Login Page</h1>
			<a href='/'>Home</a>
		</Layout>
	);
}
