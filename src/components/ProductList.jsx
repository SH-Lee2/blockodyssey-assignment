import React from "react";
import styles from "./productList.module.css";

const ProductList = ({ products }) => {
	return (
		<tbody className={styles.tbody}>
			{products.map(
				({ id, title, brand, description, price, rating, stock }) => (
					<tr key={id}>
						<td>{id}</td>
						<td>{title}</td>
						<td>{brand}</td>
						<td>
							{description.length <= 40
								? description
								: description.slice(0, 40) + "..."}
						</td>
						<td>{price}</td>
						<td>{rating}</td>
						<td>{stock}</td>
					</tr>
				)
			)}
		</tbody>
	);
};

export default ProductList;
