import { TableCell } from '@mui/material';
import React from 'react';
import { AmountI } from '../../../Type';
import UpdateStatusBtn from './UpdateStatusBtn';

interface AmtSummryProps {
  data: AmountI;
}

const AmtSummary: React.FC<AmtSummryProps> = (props) => {
  const { data } = props;

  return (
    <TableCell className="amt-summary">
      <div>
        <p className="amt-summary__amt">
          Rs.{data.payable}/{data.plan}
        </p>
        <p className="amt-summary__tenure">{data.tenure}</p>
      </div>
      <UpdateStatusBtn />
    </TableCell>
  );
};

export default AmtSummary;
