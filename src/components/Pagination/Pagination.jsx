import { useState } from "react";
import { Pagination } from "react-bootstrap";
import "./Pagination.css";

const renderPaginationItems = (props) => {
  let items = [];

  const { page, totalPages, changePage } = props;

  
  items.push(
    <Pagination.Item key={1} active={page === 1} onClick={() => changePage(1)}>
      1
    </Pagination.Item>
  );


  if (page > 4) {
    items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
  }

 
  let startPage = Math.max(2, page - 1);
  let endPage = Math.min(totalPages - 1, page + 1);

  for (let i = startPage; i <= endPage; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={page === i}
        onClick={() => changePage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

 
  if (page < totalPages - 3) {
    items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
  }

  
  if (totalPages > 1) {
    items.push(
      <Pagination.Item
        key={totalPages}
        active={page === totalPages}
        onClick={() => changePage(totalPages)}
      >
        {totalPages}
      </Pagination.Item>
    );
  }

  return items;
};

export default renderPaginationItems;
