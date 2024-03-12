import React from 'react';
import LineChart from '../components/subcomponents/LineChart';
import './storybook.css';

const mockMetric = {
  name: 'CPU Usage',
  graphLines: [
    { name: 'Limits', values: [{ timestamp: 1647172800000, value: 10 }, /* Add more data points as needed */] },
    { name: 'Requested', values: [{ timestamp: 1647172800000, value: 5 }, /* Add more data points as needed */] },
    { name: 'Used', values: [{ timestamp: 1647172800000, value: 8 }, /* Add more data points as needed */] },
  ],
};

export default {
  title: 'LineChart',
  component: LineChart,
};

const Template = (args) => <LineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  metric: mockMetric,
};
