import React from 'react';
import { Outlet } from 'react-router';
import PageAside from '../components/pageAside/PageAside';

export interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = () => {
  return (
    <div className="container-fluid bg-yellow">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-3 px-0">
          <PageAside />
        </div>
        <div className="col-lg-10 col-md-8 col-sm-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
