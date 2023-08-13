import React from 'react';
import './Pagination.css';
import { Button } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };
  
    return (
      <div className="pagination">
        <Button type="button" className="btn btn-primary" onClick={() => goToPage(currentPage - 1)}>Previous</Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button type="button" className="btn btn-primary" onClick={() => goToPage(currentPage + 1)}>Next</Button>
      </div>
    );
  };

export default Pagination;
  