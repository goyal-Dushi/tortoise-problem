import { Table, TableBody, TableContainer } from '@mui/material';
import React from 'react';
import { GridColModel, RowData } from './Type';
import DataRow from './components/DataRow';
import DataGridHead from './components/DataGridHead';
import DataGridFooter from './gridFooter/DataGridFooter';

interface DataGridProps {
  gridModal: GridColModel;
  rowData: RowData[];
}

const DataGrid: React.FC<DataGridProps> = (props) => {
  const { gridModal, rowData } = props;

  const { col_modal: colModal } = gridModal;

  return (
    <TableContainer>
      <div className="border rounded">
        <Table className="border-0">
          <DataGridHead colModal={colModal} />
          <TableBody>
            <DataRow colModal={colModal} rowData={rowData} />
          </TableBody>
        </Table>
      </div>
      <DataGridFooter />
    </TableContainer>
  );
};

export default DataGrid;
