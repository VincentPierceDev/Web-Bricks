import Layout from '../transition-layout';

export default function SignUp() {
	const title: string = 'Sign Up • Webbricks';
	const description: string = 'Login to your account';
	return (
		<Layout metaData={{ title: title, description: description }}>
			<h1>Sign Up Page</h1>
			<a href='/'>Home</a>
		</Layout>
	);
}
