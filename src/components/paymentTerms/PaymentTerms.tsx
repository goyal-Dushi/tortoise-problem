import React from 'react';
import { CardI } from '../../common/components/summaryBlock/Card';
import SummaryBlock from '../../common/components/summaryBlock/SummaryBlock';

interface PaymentTermsProps {
  cardData: CardI[];
}

const PaymentTerms: React.FC<PaymentTermsProps> = (props) => {
  const { cardData } = props;

  return (
    <div className="payment-block">
      <SummaryBlock cardData={cardData} />
    </div>
  );
};

export default PaymentTerms;
