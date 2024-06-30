import React from 'react';
import { ReqInfoI } from '../../../Type';
import { TableCell } from '@mui/material';

interface ReqInfoSummaryProps {
  data: ReqInfoI;
}

const ReqInfoSummary: React.FC<ReqInfoSummaryProps> = (props) => {
  const { data } = props;

  return (
    <TableCell key={data.date} className="reqInfo-summary">
      <p className="reqInfo-summary__dur">{data.duration}</p>
      <p className="reqInfo-summary__date">{data.date}</p>
    </TableCell>
  );
};

export default ReqInfoSummary;
