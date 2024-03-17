import React from 'react';
import { MemoryRouter } from 'react-router-dom'; 
import Logs from '../components/Logs';
import './storybook.css';

export default {
  title: 'Logs',
  component: Logs,
};

const mockTimeRange = {
  startTs: Date.now() - 5 * 60 * 1000,
  endTs: Date.now(),
};

const Template = () => (
  <div className='m-10 text-xl'>
    <h2>Formatted Date</h2>
    <Logs timeRange={mockTimeRange} selected="Last 5 minutes" setSelected="Last 5 minutes"/>
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
