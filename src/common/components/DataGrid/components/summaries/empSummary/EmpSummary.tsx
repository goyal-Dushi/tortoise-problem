import React from 'react';
import { EmployeeI } from '../../../Type';
import { TableCell } from '@mui/material';
import { UserCircle } from '@phosphor-icons/react';

interface EmpSummaryProps {
  data: EmployeeI;
}

const EmpSummary: React.FC<EmpSummaryProps> = (props) => {
  const { data } = props;

  return (
    <TableCell key={data.name}>
      <div className="emp-summary d-flex align-items-center gap-2">
        <div className="emp-summary__icon">
          <UserCircle height="inherit" width="inherit" />
        </div>
        <div>
          <p className="emp-summary__name">{data.name}</p>
          <p className="emp-summary__designation">{data.designation}</p>
        </div>
      </div>
    </TableCell>
  );
};

export default EmpSummary;
