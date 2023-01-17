import Form from "./Form";
import styles from "./search.module.css";
import Select from "./Select";

const Search = () => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles["title-wrapper"]}`}>
				<h2 className={styles.title}>검색</h2>
			</div>
			<Select />
			<Form />
		</div>
	);
};

export default Search;
