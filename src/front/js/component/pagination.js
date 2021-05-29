import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import PropTypes from "prop-types";

export const MyPagination = props => {
	const [active, setActive] = useState(1);
	const data = props.data;
	const pages = Math.ceil(data.length / props.pageSize);
	const renderItems = () => {
		let items = [];
		for (let currentPage = 1; currentPage <= pages; currentPage++) {
			items.push(
				<Pagination.Item
					onClick={e => handlePageClick(currentPage)}
					key={currentPage}
					active={currentPage === active}>
					{currentPage}
				</Pagination.Item>
			);
		}
		return items;
	};
	const handlePageClick = currentPage => {
		let start = (currentPage - 1) * props.pageSize;
		let end = start + props.pageSize;

		if (currentPage === pages) end = data.length - 1;

		let newData = data.slice(start, end);

		props.setSelected(newData);

		setActive(currentPage);
	};
	return (
		<>
			<Pagination className="justify-content-center">
				<PageItem onClick={() => handlePageClick(active > 1 ? active - 1 : 1)}>&larr;</PageItem>
				{renderItems()}
				<PageItem onClick={() => handlePageClick(active < pages ? active + 1 : pages)}>&rarr;</PageItem>
			</Pagination>
		</>
	);
};

MyPagination.propTypes = {
	data: PropTypes.array.isRequired,
	setSelected: PropTypes.func.isRequired,
	pageSize: PropTypes.number.isRequired
};
