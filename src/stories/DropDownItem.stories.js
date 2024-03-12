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

export const Default = () => (
  <DropDownItem
    text="Last 5 minutes"
    setSelected={mockSetSelected}
    setIsOpen={() => {}}
  />
);

export const Hover = () => (
  <DropDownItem
    text="Last 15 minutes"
    setSelected={mockSetSelected}
    setIsOpen={() => {}}
  />
);
