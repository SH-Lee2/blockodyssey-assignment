import { useState } from "react";
import { conditions } from "../constants";
import Form from "./Form";
import Select from "./Select";
import styles from "./search.module.css";

const Search = () => {
	const [currentCondition, setCurrentCondition] = useState("전체");
	return (
		<div className={styles.wrapper}>
			<div className={`${styles["title-wrapper"]}`}>
				<h2 className={styles.title}>검색</h2>
			</div>
			<Select
				current={currentCondition}
				onOptionClick={setCurrentCondition}
				options={conditions}
			/>
			<Form />
		</div>
	);
};

export default Search;
