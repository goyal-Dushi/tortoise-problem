import React from 'react';
import { ContentBreakDownDataI } from './Type';
import CalculativeView from './CalculativeView';
import InfoBlock from '../../common/components/infoBlock/InfoBlock';
import DividerHeading from '../../common/components/dividerHeading/DividerHeading';

export interface ContentBreakdownProps {
  data: ContentBreakDownDataI[];
}

const ContentBreakdown: React.FC<ContentBreakdownProps> = (props) => {
  const { data } = props;

  return data.map((item) => {
    return (
      <>
        <DividerHeading label={item.heading} />
        <CalculativeView calculativeData={item.breakdowns} />
        {item.helper_text ? <InfoBlock helperText={item.helper_text} /> : null}
      </>
    );
  });
};

export default ContentBreakdown;
