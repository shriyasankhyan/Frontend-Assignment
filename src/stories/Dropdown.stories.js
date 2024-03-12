import React from 'react';
import Dropdown from '../components/subcomponents/Dropdown';
import './storybook.css';

const mockSetSelected = (value) => {
  console.log(`Selected: ${value}`);
};

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: 'Last 5 minutes',
  setSelected: mockSetSelected,
};

export const Open = Template.bind({});
Open.args = {
  selected: 'Last 15 minutes',
  setSelected: mockSetSelected,
  isOpen: true,
};
