import { Pagination, PaginationItem } from '@mui/material';
import React, { useState } from 'react';
// import LinkBtn from './LinkBtn';

interface DataGridFooterProps {}

const DataGridFooter: React.FC<DataGridFooterProps> = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (_e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    console.log(page);
  };

  return (
    <div className="grid-footer">
      <div className="grid-footer__text">Showing 8 out of 17</div>
      <Pagination
        page={page}
        count={10}
        onChange={(e, page) => {
          return handlePageChange(e, page);
        }}
        shape="rounded"
        renderItem={(item) => {
          return (
            <PaginationItem
              className={`paginate-btn ${item.selected ? 'paginate-btn--active' : ''}`}
              {...item}
            />
          );
        }}
      />
    </div>
  );
};

export default DataGridFooter;
