import Layout from '@/app/webpage-layout';
import HomeHero from '@/components/landing-site/home-hero/home-hero';
import style from './page.module.css';

export default function IndexPage() {
	const title: string = 'Home • Webbricks';
	const description: string = 'This is the home page';

	return (
		<Layout metaData={{ title: title, description: description }}>
			<HomeHero textLoopDelay={3000} />
			<section className='section'>new section</section>
		</Layout>
	);
}
