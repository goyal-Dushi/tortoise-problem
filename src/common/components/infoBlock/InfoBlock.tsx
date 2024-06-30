import { Info } from '@phosphor-icons/react';
import React from 'react';

export interface InfoBlockProps {
  helperText: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ helperText }) => {
  return (
    <div className="info-block">
      <div className="info-block__icon">
        <Info height="inherit" width="inherit" color="#d3d3d3" weight="fill" />{' '}
      </div>
      <div
        className="info-block__text"
        dangerouslySetInnerHTML={{ __html: helperText }}
      />
    </div>
  );
};

export default InfoBlock;
