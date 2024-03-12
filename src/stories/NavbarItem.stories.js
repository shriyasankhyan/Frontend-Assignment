import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavbarItem from '../components/subcomponents/NavbarItem';
import './storybook.css';

export default {
  title: 'NavbarItem',
  component: NavbarItem,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Metrics = () => <NavbarItem text="Metrics" url="/metrics" />;
export const Logs = () => <NavbarItem text="Logs" url="/logs" />;
