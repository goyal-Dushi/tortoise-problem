import { Receipt } from '@phosphor-icons/react';
import React from 'react';

export interface PageHeaderProps {}

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <div className="page-header mb-3">
      <div className="d-flex align-items-center gap-2">
        <span className="page-header__icon">
          <Receipt size={32} color="#64b964" weight="duotone" />
        </span>
        <p className="page-header__title m-0 fs-4 fw-medium">Claims</p>
      </div>
      <div className="page-header__actions">
        <button className="btn btn-sm btn-outline-secondary text-dark">
          Open
        </button>
        <button className="btn btn-sm btn-outline-secondary text-dark">
          Approved
        </button>
        <button className="btn btn-sm btn-outline-secondary text-dark">
          Rejected
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
