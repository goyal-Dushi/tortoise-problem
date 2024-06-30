import React from 'react';
import PageInfoTab from './components/PageInfoTab';
import PageTab from './components/PageTab';

import {
  Buildings,
  CalendarDots,
  DeviceMobile,
  Lifebuoy,
  Notepad,
  Receipt,
  UsersThree,
} from '@phosphor-icons/react';

interface PageAsideProps {}

const PageAside: React.FC<PageAsideProps> = () => {
  return (
    <div className="page-aside vh-100">
      <div className="position-sticky top-0 left-0">
        <div className="company-logo"></div>
        <hr className="nav-separator" />
        <div className="page-aside__info-tabs">
          <PageInfoTab
            icon={<Receipt color="inherit" size="inherit" weight="duotone" />}
            cnt="17"
            href="/claimsDashboard"
            label="Claims"
          />
          <PageInfoTab
            icon={
              <UsersThree color="inherit" size="inherit" weight="duotone" />
            }
            cnt="3,456"
            href="/employees"
            label="Employees"
          />
          <PageInfoTab
            icon={
              <DeviceMobile color="inherit" size="inherit" weight="duotone" />
            }
            cnt="128"
            href="/devices"
            label="Devices"
          />
          <hr className="nav-separator" />
        </div>
        <div className="page-aside__list-tabs">
          <PageTab
            icon={<CalendarDots size="inherit" weight="duotone" />}
            label="Rental Schedules"
            href="/rentals"
          />
          <PageTab
            icon={<Notepad size="inherit" weight="duotone" />}
            label="Billing"
            href="/billings"
          />
          <PageTab
            icon={<Buildings size="inherit" weight="duotone" />}
            label="Organisation"
            href="/organisation"
          />
          <PageTab
            icon={<Lifebuoy size="inherit" weight="duotone" />}
            label="Support"
            href="/support"
          />
        </div>
      </div>
    </div>
  );
};

export default PageAside;
