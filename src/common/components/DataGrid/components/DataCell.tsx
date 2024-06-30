import React from 'react';
import { AmountI, Any, ColModel, DeviceI, EmployeeI, ReqInfoI } from '../Type';
import { TableCell } from '@mui/material';
import AmtSummary from './summaries/amtSummary/AmtSummary';
import DeviceSummary from './summaries/deviceSummary/DeviceSummary';
import EmpSummary from './summaries/empSummary/EmpSummary';
import ReqInfoSummary from './summaries/reqInfoSummary/ReqInfoSummary';

interface DataCellProps {
  data: Record<string, Any>;
  colModel: ColModel;
}

const DataCell: React.FC<DataCellProps> = (props) => {
  const { data, colModel } = props;

  const { name, summary_type: summType } = colModel;

  switch (summType) {
    case 'amount_summary':
      return <AmtSummary data={data[name] as AmountI} />;
      break;
    case 'device_summary':
      return <DeviceSummary data={data[name] as DeviceI} />;
      break;
    case 'emp_summary':
      return <EmpSummary data={data[name] as EmployeeI} />;
      break;
    case 'reqInfo_summary':
      return <ReqInfoSummary data={data[name] as ReqInfoI} />;
      break;
    default:
      <TableCell>{data[name]}</TableCell>;
  }
};

export default DataCell;
