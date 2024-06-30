import styled from '@emotion/styled';
import { Tabs } from '@mui/material';

const StyledTabs = styled(Tabs)({
  paddingBottom: '8px',
  borderBottom: '1px solid lightgray',
  '& .MuiTabs-indicator': {
    borderBottom: '1px solid green',
  },
});

export default StyledTabs;
