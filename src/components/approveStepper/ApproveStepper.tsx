import { Stepper, Step, StepLabel, StepContent } from '@mui/material';
import {
  CheckCircle,
  UserCircle,
  UserCircleCheck,
  XCircle,
} from '@phosphor-icons/react';
import React from 'react';
import StyledStepIcon from './StyledStepIcon';
import { useNavigate } from 'react-router';

interface ApproveStepperProps {
  approvalSteps: ApprovalStep[];
}

export interface ApprovalStep {
  name: string;
  label: string;
  approver: string;
  isApproved: boolean;
}

const ApproveStepper: React.FC<ApproveStepperProps> = (props) => {
  const { approvalSteps } = props;
  const navigate = useNavigate();

  const handleApproveClick = () => {
    navigate('/claimsDashboard');
  };

  return (
    <div className="container-lg my-5">
      <div>
        <p className="fs-5 fw-medium mb-1">
          <UserCircleCheck color="#44ca5f" className="me-2" size={24} />
          Approve Claim
        </p>
        <p>Your orgniazatoin has set up multilevel claim approval process</p>
      </div>
      <div className="stepper-container">
        <Stepper orientation="vertical">
          {approvalSteps.map((step) => (
            <Step active={step.isApproved} expanded key={step.name}>
              <StepLabel StepIconComponent={StyledStepIcon}>
                {step.label}
              </StepLabel>
              <StepContent>
                <div
                  className={`content-block ${step.isApproved ? 'content-block--active' : ''} border rounded py-2 text-dark fw-medium`}
                >
                  <div className="content-block__icon">
                    <UserCircle height="inherit" width="inherit" />
                  </div>
                  <div className="content-block__content">{step.approver}</div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className="btn-container d-flex align-items-center gap-3 mt-5">
        <button className="btn btn-sm border rounded px-3 w-25">
          <XCircle size={20} className="me-2" color="#e93a3a" weight="fill" />{' '}
          Reject
        </button>
        <button
          onClick={handleApproveClick}
          className="btn btn-success btn-sm px-3 w-25"
        >
          <CheckCircle size={20} className="me-2" color="#fff" weight="fill" />
          Approve
        </button>
      </div>
    </div>
  );
};

export default ApproveStepper;
