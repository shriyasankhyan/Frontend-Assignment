import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { action } from '@storybook/addon-actions'; 


export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <Navbar selected="Last 5 minutes" setSelected={action('setSelected')} />;
