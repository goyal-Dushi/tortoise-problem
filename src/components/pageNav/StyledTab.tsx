import { Tab, styled } from '@mui/material';

const StyledTab = styled(Tab)({
  display: 'block',
  minHeight: 'min-content',
  textTransform: 'capitalize',
  margin: '10px auto',
  height: '28px',
  padding: '0',
  fontWeight: 'bold',
  fontSize: '12px',
  '&:hover': {
    opacity: 1,
    color: '#000',
  },
  '&.Mui-selected': {
    padding: '4px 8px',
    border: '1px solid lightgray',
    borderRadius: '10px',
    color: '#000',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#efefef',
  },
});

export default StyledTab;
