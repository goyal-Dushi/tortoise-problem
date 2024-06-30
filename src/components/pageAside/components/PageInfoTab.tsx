import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface PageInfoTabProps {
  label: string;
  cnt: string;
  href: string;
  icon: ReactElement;
}

const PageInfoTab: React.FC<PageInfoTabProps> = (props) => {
  const { label, cnt, href, icon } = props;

  return (
    <NavLink to={href}>
      <div className="nav-card p-3">
        <div className="d-flex justify-content-between">
          <div className="nav-card__icon">{icon}</div>
          <div className="nav-card__count"> {cnt} </div>
        </div>
        <div className="nav-card__label"> {label} </div>
      </div>
    </NavLink>
  );
};

export default PageInfoTab;
