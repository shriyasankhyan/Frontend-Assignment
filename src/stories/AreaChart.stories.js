import React from 'react';
import AreaChart from '../components/subcomponents/AreaChart';
import './storybook.css';

const mockMetricData = {
  name: 'Example Metric',
  graphLines: [
    { name: 'Used', values: [{ timestamp: 1647504000000, value: 50 }] },
    { name: 'Write', values: [{ timestamp: 1647504000000, value: 30 }] },
    { name: 'Requested', values: [{ timestamp: 1647504000000, value: 70 }] },
  ],
};

export default {
  title: 'AreaChart',
  component: AreaChart,
};

export const Default = () => (
  <AreaChart
    metric={mockMetricData}
  />
);
