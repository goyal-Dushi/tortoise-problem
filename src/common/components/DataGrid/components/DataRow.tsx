import React from 'react';
import { ColModel, RowData } from '../Type';
import { TableRow } from '@mui/material';
import DataCell from './DataCell';
import { useNavigate } from 'react-router';

interface DataRowProps {
  rowData: RowData[];
  colModal: Record<string, ColModel>;
}

const DataRow: React.FC<DataRowProps> = (props) => {
  const { rowData, colModal } = props;
  const navigate = useNavigate();

  const handleRowClick = (url?: string) => {
    if (url) {
      navigate(url);
    }
  };

  return rowData.map((data) => {
    return (
      <TableRow
        onClick={() => {
          return handleRowClick(data.action_url);
        }}
        className={`${data.action_url ? 'cursor-pointer' : ''}`}
        key={data.id}
      >
        {Object.entries(colModal).map(([key, modal]) => {
          return <DataCell key={key} data={data} colModel={modal} />;
        })}
      </TableRow>
    );
  });
};

export default DataRow;
