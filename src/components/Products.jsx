import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useState } from "react";
import { perPages } from "../constants";
import Pagination from "./Pagination";
import Select from "./Select";
import styles from "./products.module.css";
import ProductList from "./ProductList";

const getData = async () => {
	const res = await fetch("https://dummyjson.com/products?limit=100");
	const data = await res.json();
	return data;
};

const Products = () => {
	const { data, isLoading } = useQuery(["list"], getData);
	const [currentPage, setCurrentPage] = useState(1);
	const [currentPerPage, setCurrentPerPage] = useState(10);

	if (isLoading) return;

	return (
		<Fragment>
			<div className={styles["result-text"]}>
				<span>검색된 데이터: {data.products.length}건</span>
			</div>
			<div className={styles.wrapper}>
				<table className={styles.table}>
					<thead>
						<tr>
							<th>상품번호</th>
							<th>상품명</th>
							<th>브랜드</th>
							<th>상품내용</th>
							<th>가격</th>
							<th>평점</th>
							<th>재고</th>
						</tr>
					</thead>
					<ProductList
						products={data.products}
						currentPage={currentPage}
						currentPerPage={currentPerPage}
					/>
				</table>
				<div className={styles["pagination-wrapper"]}>
					<Select
						current={currentPerPage}
						onOptionClick={setCurrentPerPage}
						options={perPages}
						direction="top"
						name="perPage"
					/>
					<Pagination
						max={data.products.length / currentPerPage}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Products;
