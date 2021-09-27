

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import BeachCard from '../src/components/beach-card';

const testBeach = {
  beachId: 12,
  beachName: 'Ontario Place',
  eColi: 99,
  advisory: 'safe',
  statusFlag: 'unsefa',
  collectionDate: 'Mon Sep 27 2021 19:29:22 GMT-0400 (Eastern Daylight Time)',
};

describe('Home', () => {
  it('renders the right name', () => {

    render(<BeachCard beach={testBeach} />);

    const heading = screen.getByText('Ontario Place');

    expect(heading).toBeInTheDocument();
  });
});
