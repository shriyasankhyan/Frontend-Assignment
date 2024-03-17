// LineChart.stories.js
import React from 'react';
import LineChart from '../components/subcomponents/LineChart';
import './storybook.css';
const mockMetricData = {
  name: 'CPU Usage',
  graphLines: [
    { 
      name: 'Limits', 
      values: [
        { timestamp: 1647172800000, value: 10 },
        { timestamp: 1647172801000, value: 12 },
        { timestamp: 1647172802000, value: 11 },
        { timestamp: 1647172803000, value: 14 },
        { timestamp: 1647172804000, value: 9 },
        { timestamp: 1647172805000, value: 15 }
      ]
    },
    { 
      name: 'Requested', 
      values: [
        { timestamp: 1647172800000, value: 5 },
        { timestamp: 1647172801000, value: 6 },
        { timestamp: 1647172802000, value: 7 },
        { timestamp: 1647172803000, value: 8 },
        { timestamp: 1647172804000, value: 7 },
        { timestamp: 1647172805000, value: 9 }
      ] 
    },
    { 
      name: 'Used', 
      values: [
        { timestamp: 1647172800000, value: 8 },
        { timestamp: 1647172801000, value: 7 },
        { timestamp: 1647172802000, value: 9 },
        { timestamp: 1647172803000, value: 6 },
        { timestamp: 1647172804000, value: 8 },
        { timestamp: 1647172805000, value: 10 }
      ] 
    },
  ],
};

export default {
  title: 'LineChart',
  component: LineChart,
};

const Template = ()=> (<div className='m-10 text-xl '>
    <h2>Line Chart</h2>
    <p>Displaying Example Metric:</p>
    <LineChart metric={mockMetricData} />
  </div>)

export const Default = Template.bind({});
