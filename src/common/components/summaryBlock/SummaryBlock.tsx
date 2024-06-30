import React from 'react';
import Card, { CardI } from './Card';

interface SummaryBlockProps {
  cardData: CardI[];
}

const SummaryBlock: React.FC<SummaryBlockProps> = (props) => {
  const { cardData } = props;

  return (
    <div className="summary-block">
      {cardData.map((data) => {
        return <Card card={data} key={data.name} />;
      })}
    </div>
  );
};

export default SummaryBlock;
