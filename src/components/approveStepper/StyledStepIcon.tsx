import { StepIcon, styled } from '@mui/material';

const StyledStepIcon = styled(StepIcon)(() => ({
  backgroundColor: '#fff !important',
  border: '2px solid gray !important',
  fill: 'white !important',
  borderRadius: '50%',
  padding: '4px',
  height: '30px',
  width: '30px',
  '& .MuiStepIcon-text': {
    fill: 'gray !important',
    fontSize: '14px',
  },
}));

export default StyledStepIcon;
