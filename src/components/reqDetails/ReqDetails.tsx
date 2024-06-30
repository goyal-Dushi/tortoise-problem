import { UserCircle } from '@phosphor-icons/react';
import React from 'react';

interface ReqDetailsProps {}

const ReqDetails: React.FC<ReqDetailsProps> = () => {
  return (
    <div className="req-details">
      <div className="user-section">
        <div className="user-section__icon">
          <UserCircle height="inherit" width="inherit" />
        </div>
        <div className="user-section__detail">
          <p className="user-name">Aditya Garikapati</p>
          <p className="user-designation">Frontend Developer</p>
        </div>
      </div>
      <div className="date-section">
        <p className="duration">Requested 5m ago</p>
        <p className="date"> 12th April 2024 </p>
      </div>
    </div>
  );
};

export default ReqDetails;
