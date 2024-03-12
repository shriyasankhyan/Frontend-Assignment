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
  <Dropdown
    selected="Last 5 minutes"
    setSelected={mockSetSelected}
  />
);

export const Open = () => (
  <Dropdown
    selected="Last 15 minutes"
    setSelected={mockSetSelected}
    isOpen={true}
  />
);
