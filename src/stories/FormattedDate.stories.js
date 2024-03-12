import React from 'react';
import FormattedDate from '../components/subcomponents/FormattedDate';
import './storybook.css';

const mockTimeRange = {
  startTs: Date.now() - 5 * 60 * 1000,
  endTs: Date.now(),
};

export default {
  title: 'FormattedDate',
  component: FormattedDate,
};

const Template = (args) => <FormattedDate {...args} />;

export const Default = Template.bind({});
Default.args = {
  timeRange: mockTimeRange,
};
