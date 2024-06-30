import React from 'react';
import DataGrid from '../common/components/DataGrid/DataGrid';
import gridCol from '../common/data/gridConfig.json';
import rowData from '../common/data/gridData.json';
import { GridColModel, RowData } from '../common/components/DataGrid/Type';
import PageHeader from '../components/pageHeader/PageHeader';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div
      id="dashboard"
      className="content-wrapper bg-light p-3 border rounded my-3 mx-2"
    >
      <PageHeader />
      <DataGrid
        gridModal={gridCol as unknown as GridColModel}
        rowData={rowData as unknown as RowData[]}
      />
    </div>
  );
};

export default Dashboard;
