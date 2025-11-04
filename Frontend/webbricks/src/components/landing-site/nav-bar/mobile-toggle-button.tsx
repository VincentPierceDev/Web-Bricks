import styles from "./mtb.module.css";

type Props = {
	toggle: () => void;
};

function MobileToggleButton({ toggle }: Props) {
	return (
		<button id={styles["mobile-nav-btn"]} onClick={toggle}>
			<span className={styles["btn-bar"]} />
			<span className={styles["btn-bar"]} />
			<span className={styles["btn-bar"]} />
		</button>
	);
}

export default MobileToggleButton;
