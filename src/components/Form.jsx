import { useRef } from "react";
import styles from "./form.module.css";

const Form = () => {
	const inputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form onSubmit={submitHandler} className={styles.form}>
				<input ref={inputRef} type="text" className={styles.input} />
				<button type="button" className={styles.button}>
					조회
				</button>
			</form>
		</>
	);
};

export default Form;
