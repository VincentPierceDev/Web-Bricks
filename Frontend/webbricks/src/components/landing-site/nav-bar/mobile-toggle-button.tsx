import { memo } from 'react';
import styles from './mtb.module.css';

type Props = {
	toggle: () => void;
	state: boolean;
};

export default function MobileToggleButton({ toggle, state }: Props) {
	return (
		<button
			id={styles['mobile-nav-btn']}
			className={styles[`${state ? 'toggled' : ''}`]}
			data-testid='mobile-nav-btn'
			onClick={toggle}
			aria-expanded={state}
		>
			<span id={styles['top-bar']} className={styles['btn-bar']} />
			<span id={styles['middle-bar']} className={styles['btn-bar']} />
			<span id={styles['bottom-bar']} className={styles['btn-bar']} />
		</button>
	);
}

MobileToggleButton.defaultProps = {
	state: false,
};
