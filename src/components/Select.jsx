import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import { arrowDown, arrowUp } from "../assets";
import { conditions } from "../constants";

const SearchSelect = () => {
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

	return (
		<div className={styles.wrapper} ref={expandRef}>
			<div
				className={styles.select}
				onClick={() => setIsExpand((prev) => !prev)}
			>
				<span>전체</span>
				{isExpand ? (
					<img src={arrowDown} alt="expand icon" width={18} height={18} />
				) : (
					<img src={arrowUp} alt="expand icon" width={18} height={18} />
				)}
			</div>
			{isExpand && (
				<div className={styles.expand}>
					{conditions.map((condition) => (
						<div
							key={condition.name}
							className={styles.condition}
							onClick={() => setIsExpand(false)}
						>
							<span>{condition.name}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchSelect;
