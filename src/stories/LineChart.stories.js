// LineChart.stories.js
import React from 'react';
import LineChart from '../components/subcomponents/LineChart';
import './storybook.css';

const mockMetric = {
  name: 'CPU Usage',
  graphLines: [
    { name: 'Limits', values: [{ timestamp: 1647172800000, value: 10 }] },
    { name: 'Requested', values: [{ timestamp: 1647172800000, value: 5 }] },
    { name: 'Used', values: [{ timestamp: 1647172800000, value: 8 }] },
  ],
};

export default {
  title: 'LineChart',
  component: LineChart,
};

const Template = () => <LineChart metric={mockMetric} />;

export const Default = Template.bind({});
