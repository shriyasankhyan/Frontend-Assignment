import React from 'react';
import DropDownItem from '../components/subcomponents/DropDownItem';
import './storybook.css';

const mockSetSelected = (value) => {
  console.log(`Selected: ${value}`);
};

export default {
  title: 'DropDownItem',
  component: DropDownItem,
};

const Template = (args) => <DropDownItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Last 5 minutes',
  setSelected: mockSetSelected,
  setIsOpen: () => {},
};

export const Hover = Template.bind({});
Hover.args = {
  text: 'Last 15 minutes',
  setSelected: mockSetSelected,
  setIsOpen: () => {},
};
