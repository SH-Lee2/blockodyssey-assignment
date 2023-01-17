import styles from "./header.module.css";
import Search from "./Search";

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<div className={`${styles["title-wrapper"]}`}>
				<h1 className={styles.title}>상품검색</h1>
			</div>
			<Search />
		</header>
	);
};

export default Header;
