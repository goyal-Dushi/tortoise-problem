import React from 'react';
import PageNav, { NavTabI } from '../components/pageNav/PageNav';
import { Outlet } from 'react-router';
import ApproveStepper from '../components/approveStepper/ApproveStepper';
import { approvalSteps } from '../data';

interface DetailsProps {}

const navTabs: NavTabI[] = [
  {
    label: 'Claim Details',
    name: 'claim_details',
    link: '/claims',
  },
  {
    label: 'Payment Breakdown',
    name: 'pay_breakdown',
    link: '/payment',
  },
  {
    label: 'Documents',
    name: 'documents',
    link: '/documents',
  },
];

const Details: React.FC<DetailsProps> = () => {
  return (
    <>
      <PageNav navList={navTabs} />
      <Outlet />
      <hr />
      <ApproveStepper approvalSteps={approvalSteps} />
    </>
  );
};

export default Details;
