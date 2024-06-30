import React from 'react';
import ItemBlock from '../common/components/itemBlock/ItemBlock';
import { paymentTerms } from '../components/paymentTerms/data';
import ReqDetails from '../components/reqDetails/ReqDetails';
import { itemsData } from '../data';
import SummaryBlock from '../common/components/summaryBlock/SummaryBlock';

interface ClaimsProps {}

const Claims: React.FC<ClaimsProps> = () => {
  return (
    <>
      <div className="container-lg mt-5">
        <p className="fw-bold text-dark">Request Details</p>
        <ReqDetails />
      </div>
      <div className="container-lg my-5">
        <p className="fw-bold text-dark">Payment Terms</p>
        <SummaryBlock cardData={paymentTerms} />
      </div>
      <div className="container-lg my-5">
        <p className="fw-bold">Claimed Items</p>
        <div className="overflow-y-auto" style={{ maxHeight: '180px' }}>
          <ItemBlock itemData={itemsData} />
        </div>
      </div>
    </>
  );
};

export default Claims;
