import React from 'react';
import AreaChart from '../components/subcomponents/AreaChart';
import './storybook.css';

const mockMetricData = {
  name: 'Example Metric',
  graphLines: [
    { name: 'Used', values: [{ timestamp: 1647504000000, value: 50 }, /* Add more data points as needed */] },
    { name: 'Write', values: [{ timestamp: 1647504000000, value: 30 }, /* Add more data points as needed */] },
    { name: 'Requested', values: [{ timestamp: 1647504000000, value: 70 }, /* Add more data points as needed */] },
  ],
};

export default {
  title: 'AreaChart',
  component: AreaChart,
};

const Template = (args) => <AreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  metric: mockMetricData,
};
