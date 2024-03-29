import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Default as DropdownStories } from '../stories/Dropdown.stories';
import { Default as DropDownItemStories } from '../stories/DropDownItem.stories';
import { Default as FormattedDateStories } from '../stories/FormattedDate.stories';
import { Default as LineChartStories } from '../stories/LineChart.stories';
import { Default as LogsStories } from '../stories/Logs.stories';
import { Default as MetricsStories } from '../stories/Metrics.stories';
import { Default as NavbarStories } from '../stories/Navbar.stories';
import { Metrics as NavbarItemMetrics, Logs as NavbarItemLogs } from '../stories/NavbarItem.stories';
import { Default as AreaChartStories } from '../stories/AreaChart.stories';

const Storybook = () => {
  const navigate = useNavigate();

  const storyList = [
    { name: 'Dropdown', route: 'dropdown', stories: [DropdownStories] },
    { name: 'Dropdown Item', route: 'dropdown-item', stories: [DropDownItemStories] },
    { name: 'Formatted Date', route: 'formatted-date', stories: [FormattedDateStories] },
    { name: 'Line Chart', route: 'line-chart', stories: [LineChartStories] },
    { name: 'Area Chart', route: 'area-chart', stories: [AreaChartStories] },
    { name: 'Logs', route: 'logs', stories: [LogsStories] },
    { name: 'Metrics', route: 'metrics', stories: [MetricsStories] },
    { name: 'Navbar', route: 'navbar', stories: [NavbarStories] },
    { name: 'Navbar Item', route: 'navbar-item', stories: [NavbarItemMetrics, NavbarItemLogs] },
  ];

  const handleStoryClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <h1 className='text-3xl p-4 bg-black text-white'>Storybook</h1>
      <ul>
        {storyList.map(({ name, route }) => (
          <li key={route}>
            <button onClick={() => handleStoryClick(route)}>{name}</button>
          </li>
        ))}
      </ul>

      <Routes>
        {storyList.map(({ route, stories }) => (
          <Route path={route} key={route} element={<StoryRenderer stories={stories} />} />
        ))}
      </Routes>
    </div>
  );
};

const StoryRenderer = ({ stories }) => (
  <div>
    {stories.map((Story, index) => (
      <div key={index}>
        <Story args={Story.args} />
      </div>
    ))}
  </div>
);

export default Storybook;
