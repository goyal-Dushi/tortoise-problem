import React from 'react';

export interface DividerHeadingProps {
  label: string;
}

const DividerHeading: React.FC<DividerHeadingProps> = ({ label }) => {
  return (
    <div className="header-block d-flex w-100 align-items-center">
      <hr className="d-inline-flex" />
      <div className="badge rounded-pill header-block__label">{label}</div>
      <hr className="d-inline-block" />
    </div>
  );
};

export default DividerHeading;
