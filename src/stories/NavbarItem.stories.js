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

export const Metrics = () => <div className='m-10 text-xl '>
<h2>Metrics</h2>
<NavbarItem text="Metrics" url="/metrics" />
</div>

export const Logs = () => <div className='m-10 text-xl '>
<h2>Logs</h2>
<NavbarItem text="Logs" url="/logs" />
</div>
