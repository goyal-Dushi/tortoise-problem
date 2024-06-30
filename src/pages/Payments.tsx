import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Card from '../common/components/summaryBlock/Card';
import { ArrowCircleDown } from '@phosphor-icons/react';
import { paymentsData } from '../data';
import { PaymentsDataI } from './Type';
import ContentBreakdown from '../components/contentBreakdown/ContentBreakdown';

export interface PaymentsProps {}

const Payments: React.FC<PaymentsProps> = () => {
  return (paymentsData as PaymentsDataI[]).map((data) => {
    return (
      <div className="container-lg my-5">
        <Accordion defaultExpanded className="border rounded">
          <AccordionSummary
            expandIcon={
              <ArrowCircleDown size={24} color="#e2e9e4" weight="fill" />
            }
          >
            <div className="d-flex flex-column gap-3">
              <div className="fw-bold">{data.heading}</div>
              <div className="d-flex align-items center justify-content-between flex-wrap">
                {data.cardData.map((item) => {
                  return <Card card={item} />;
                })}
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <p className="text-secondary fw-medium mb-1">
                {data.heading_text}
              </p>
              {data.sub_text.map((text) => {
                return <p className="sub-text">{text}</p>;
              })}
            </div>
            <ContentBreakdown data={data.breakdown_data} />
          </AccordionDetails>
        </Accordion>
      </div>
    );
  });
};

export default Payments;
