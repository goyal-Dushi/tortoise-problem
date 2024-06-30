import React from 'react';
import { BreakDownI } from './Type';

export interface CalculativeViewProps {
  calculativeData: BreakDownI[];
}

const CalculativeView: React.FC<CalculativeViewProps> = ({
  calculativeData,
}) => {
  return calculativeData.map((data) => {
    return (
      <React.Fragment key={data.name}>
        <div
          className={`info-item ${data.type === 'result' ? 'info-item--separator' : ''}`}
        >
          <div>
            <div className="info-item__icon"></div>
            <div className="info-item__label"> {data.label} </div>
          </div>
          <div className="info-item__value"> {data.value} </div>
        </div>
      </React.Fragment>
    );
  });
};

export default CalculativeView;
