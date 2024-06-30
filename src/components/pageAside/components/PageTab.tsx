import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface PageTabProps {
  label: string;
  href: string;
  icon: ReactElement;
}

const PageTab: React.FC<PageTabProps> = (props) => {
  const { label, href, icon } = props;

  return (
    <NavLink to={href}>
      <div className="nav-list">
        <span className="nav-list__icon">{icon}</span>
        <span className="nav-list__label"> {label} </span>
      </div>
    </NavLink>
  );
};

export default PageTab;
