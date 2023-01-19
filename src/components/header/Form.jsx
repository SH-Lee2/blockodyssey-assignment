import { useEffect, useRef } from "react";
import styles from "./form.module.css";

const Form = ({ setKeyword }) => {
	const inputRef = useRef();
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		inputRef.current.value = urlParams.get("keyword");
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		setKeyword(inputRef.current.value);
	};

	return (
		<>
			<form onSubmit={submitHandler} className={styles.form}>
				<input ref={inputRef} type="text" className={styles.input} />
				<button type="submit" className={styles.button}>
					조회
				</button>
			</form>
		</>
	);
};

export default Form;
