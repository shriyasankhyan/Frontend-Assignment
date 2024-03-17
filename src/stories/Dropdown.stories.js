// Dropdown.stories.js
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

export const Default = () => (
  <div className='m-10 text-xl '>
    <h2>Dropdown Stories</h2>
    <Dropdown
    selected="Last 5 minutes"
    setSelected={mockSetSelected}
  />
  </div>
);

