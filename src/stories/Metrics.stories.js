import React from 'react';
import Metrics from '../components/Metrics';
import { MemoryRouter } from 'react-router-dom'; 

export default {
  title: 'Metrics',
  component: Metrics,
};

const mockTimeRange = {
  startTs: Date.now() - 5 * 60 * 1000,
  endTs: Date.now(),
};

const Template = () => (
  <div className='m-10 text-xl'>
    <h2>Metrics</h2>
    <Metrics timeRange={mockTimeRange} selected="Last 5 minutes"  setSelected="Last 5 minutes"/>
  </div>
);

export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];