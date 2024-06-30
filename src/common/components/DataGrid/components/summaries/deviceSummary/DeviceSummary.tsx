import React from 'react';
import { TableCell } from '@mui/material';
import { Devices } from '@phosphor-icons/react';
import { DeviceI } from '../../../Type';

interface DeviceSummaryProps {
  data: DeviceI;
}

const DeviceSummary: React.FC<DeviceSummaryProps> = (props) => {
  const { data } = props;

  return (
    <TableCell key={data.name}>
      <div className="device-summary">
        <div className="device-summary__icon">
          <Devices height="inherit" width="inherit" />
        </div>
        <div>
          <p className="device-summary__label">{data.label}</p>
          <p className="device-summary__sub-text">
            {data.add_ons.count
              ? `+ ${data.add_ons.count} add-ons`
              : 'No add-ons'}
          </p>
        </div>
      </div>
    </TableCell>
  );
};

export default DeviceSummary;
