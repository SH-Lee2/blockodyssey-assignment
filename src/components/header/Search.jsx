import { useEffect, useState } from "react";
import { conditions } from "../../constants";
import Form from "./Form";
import Select from "../Select";
import styles from "./search.module.css";

const Search = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const [currentCondition, setCurrentCondition] = useState(
		urlParams.get("condition") || "전체"
	);
	const [keyword, setKeyword] = useState(urlParams.get("keyword") || "");

	useEffect(() => {
		if (currentCondition === "" || keyword === "") return;
		window.history.pushState(
			"",
			null,
			`?keyword=${keyword}&condition=${currentCondition}`
		);
	}, [currentCondition, keyword]);

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
			<Form setKeyword={setKeyword} keyword={keyword} />
		</div>
	);
};

export default Search;
