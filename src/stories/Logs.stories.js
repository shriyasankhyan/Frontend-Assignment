import React from 'react';
import Logs from '../components/Logs';
import './storybook.css';

export default {
  title: 'Components/Logs',
  component: Logs,
};

const mockTimeRange = {
  startTs: Date.now() - 5 * 60 * 1000,
  endTs: Date.now(),
};

const Template = (args) => <Logs {...args} />;

export const Default = Template.bind({});
Default.args = {
  timeRange: mockTimeRange,
};
