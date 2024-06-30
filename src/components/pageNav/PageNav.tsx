import React, { useState } from 'react';
import StyledTab from './StyledTab';
import { useNavigate } from 'react-router';
import StyledTabs from './StyledTabs';

interface PageNavProps {
  navList: NavTabI[];
}

export interface NavTabI {
  link: string;
  name: string;
  label: string;
}

const PageNav: React.FC<PageNavProps> = (props) => {
  const { navList } = props;
  const [tabIdx, setTabIdx] = useState(0);
  const navigate = useNavigate();

  const handleTabSwitch = (e: React.SyntheticEvent, value: number) => {
    e.stopPropagation();
    setTabIdx(value);
  };

  const handleTabClick = (e: React.SyntheticEvent, link: string) => {
    navigate(link);
  };

  return (
    <StyledTabs value={tabIdx} role="navigation" onChange={handleTabSwitch}>
      {navList.map((data) => {
        return (
          <StyledTab
            disableRipple
            onClick={(e) => handleTabClick(e, data.link)}
            label={data.label}
          />
        );
      })}
    </StyledTabs>
  );
};

export default PageNav;
