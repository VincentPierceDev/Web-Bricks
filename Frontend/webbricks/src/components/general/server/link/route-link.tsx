import { ReactNode } from 'react';
import '../../../component-global.css';
import styles from './route-link.module.css';
import Link from 'next/link';

export enum LinkType {
	Fancy = 'fancy-link',
	Solid = 'solid-link',
	Ghost = 'ghost-link',
	Text = 'text-link',
	UnderlineText = 'underline-text-link',
}

//id and extra class are precomputed
type Props = {
	id: string;
	extraClass: string;
	href: string;
	type: LinkType;
	prefetch: boolean;
	children: ReactNode;
};

export default function RouteLink(Props: Props) {
	//precompute the unique class
	const classString: string = Props.type.toString();
	const linkNativeClass: string = styles[classString];

	return (
		<Link
			id={Props.id}
			className={`${linkNativeClass} ${Props.extraClass}`}
			href={Props.href}
			prefetch={Props.prefetch}
		>
			{Props.children}
		</Link>
	);
}

RouteLink.defaultProps = {
	href: '/',
	type: LinkType.Solid,
	prefetch: false,
	extraClass: '',
};
