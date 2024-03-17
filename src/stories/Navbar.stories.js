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

const Template = () => ( <div className='m-10 text-xl '>
    <h2>Navbar</h2>
    <Navbar selected="Last 5 minutes" setSelected={action('setSelected')}/>
  </div>
);

export const Default = Template.bind({});
