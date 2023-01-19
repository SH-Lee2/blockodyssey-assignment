import React from "react";
import { arrowLeft, arrowRight } from "../../assets";
import styles from "./pagination.module.css";

const getButtonArray = ({ currentPage, max, offset }) => {
	const offsetNumber =
		currentPage <= offset || currentPage > max - offset ? offset : offset - 1;
	const numbersList = [];
	const numbersListWithDots = [];

	if (max <= 1 || max === undefined) return [1];

	numbersList.push(1);
	for (
		let i = currentPage - offsetNumber;
		i <= currentPage + offsetNumber;
		i++
	) {
		if (i < max && i > 1) {
			numbersList.push(i);
		}
	}
	numbersList.push(max);

	numbersList.reduce((accumulator, currentValue) => {
		if (accumulator === 1) {
			numbersListWithDots.push(accumulator);
		}
		if (currentValue - accumulator !== 1) {
			numbersListWithDots.push("...");
		}
		numbersListWithDots.push(currentValue);

		return currentValue;
	});

	return numbersListWithDots;
};

const Pagination = ({ max, currentPage, setCurrentPage }) => {
	const pages = getButtonArray({ currentPage, max, offset: 2 });
	return (
		<div className={styles.wrapper}>
			<button
				type="button"
				disabled={currentPage === 1}
				onClick={() => setCurrentPage((pre) => pre - 1)}
				className={styles.button}
			>
				<img src={arrowLeft} alt="prev page button" width={18} height={18} />
			</button>
			{pages.map((page, i) => (
				<button
					key={i}
					type="button"
					onClick={() => setCurrentPage(page)}
					className={`${page === "..." ? styles.dot : styles.button} ${
						page === currentPage && styles.active
					}`}
				>
					{page}
				</button>
			))}
			<button
				type="button"
				disabled={currentPage === max}
				onClick={() => setCurrentPage((pre) => pre + 1)}
				className={styles.button}
			>
				<img src={arrowRight} alt="next page button" width={18} height={18} />
			</button>
		</div>
	);
};

export default Pagination;
