import React from 'react';
import FormattedDate from '../components/subcomponents/FormattedDate';
import './storybook.css';

const mockTimeRange = {
  startTs: Date.now() - 5 * 60 * 1000,
  endTs: Date.now(),
};

export default {
  title: 'Formatted Date',
  component: FormattedDate,
};

const Template = () => ( <div className='m-10 text-xl '>
    <h2>Formatted Date</h2>
    <FormattedDate timeRange={mockTimeRange} />
  </div>
);

export const Default = Template.bind({});