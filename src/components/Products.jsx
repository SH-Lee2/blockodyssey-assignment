import { useQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";

import styles from "./products.module.css";
import ProductList from "./ProductList";

const getData = async () => {
	const res = await fetch("https://dummyjson.com/products?limit=100");
	const data = await res.json();
	return data;
};

const Products = () => {
	const { data, isLoading } = useQuery(["list"], getData);

	if (isLoading) return;
	return (
		<Fragment>
			<div className={styles["result-text"]}>
				<span>검색된 데이터: 100건</span>
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
					<ProductList products={data.products} />
				</table>
			</div>
		</Fragment>
	);
};

export default Products;
