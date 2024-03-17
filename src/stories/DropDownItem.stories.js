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
  <div className='m-10 text-xl '>
  <h2>Dropdown Item</h2>
  <DropDownItem
    text="Last 5 minutes"
    setSelected={mockSetSelected}
    setIsOpen={() => {}}
  />
</div>
);
