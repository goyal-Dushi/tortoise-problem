import React from 'react';
import { ColModel } from '../Type';
import { TableHead, TableRow, TableCell } from '@mui/material';

interface DataGridHeadProps {
  colModal: Record<string, ColModel>;
}

const DataGridHead: React.FC<DataGridHeadProps> = (props) => {
  const { colModal } = props;

  return (
    <TableHead>
      <TableRow className="bg-light">
        {Object.entries(colModal).map(([gridKey, model]) => {
          return (
            <TableCell key={gridKey} align="left">
              <strong>{model.label}</strong>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default DataGridHead;
