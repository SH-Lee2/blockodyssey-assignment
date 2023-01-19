import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import { arrowDown, arrowUp } from "../assets";

const Select = ({ current, onOptionClick, options, direction, name }) => {
	const [isExpand, setIsExpand] = useState(false);
	const expandRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (expandRef.current && !expandRef.current.contains(e.target))
				setIsExpand(false);
		};
		isExpand && document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	});

	const selectHandler = (perPage) => {
		onOptionClick(perPage);
	};

	return (
		<div className={styles.wrapper} ref={expandRef}>
			{name && <span>페이지당 행: </span>}

			<div
				className={styles.select}
				onClick={() => setIsExpand((prev) => !prev)}
			>
				<span>{current}</span>
				{!isExpand ? (
					<img
						src={direction ? arrowDown : arrowUp}
						alt="expand icon"
						width={18}
						height={18}
					/>
				) : (
					<img
						src={direction ? arrowUp : arrowDown}
						alt="expand icon"
						width={18}
						height={18}
					/>
				)}

				{isExpand && (
					<div
						className={styles.expand}
						style={direction === "top" ? { bottom: "48px" } : { top: "48px" }}
					>
						{options.map(({ value }) => (
							<div
								key={value}
								className={styles.condition}
								onClick={() => selectHandler(value)}
							>
								<span>{value}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Select;
