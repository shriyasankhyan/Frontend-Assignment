import React from 'react';
import Metrics from '../components/Metrics';

export default {
  title: 'Components/Metrics',
  component: Metrics,
};

const Default = () => {
  const mockTimeRange = {
    startTs: Date.now() - 5 * 60 * 1000,
    endTs: Date.now(),
  };

  const mockMetricsData = [
    {
      name: 'CPU Usage',
      graphLines: [
        { name: 'Limits', values: [] },
        { name: 'Requested', values: [] },
        { name: 'Used', values: [] },
      ],
    },
    {
      name: 'Memory Usage',
      graphLines: [
        { name: 'Limits', values: [] },
        { name: 'Requested', values: [] },
        { name: 'Used', values: [] },
      ],
    },
    {
      name: 'Network Usage',
      graphLines: [
        { name: 'Limits', values: [] },
        { name: 'Requested', values: [] },
        { name: 'Used', values: [] },
      ],
    },
    {
      name: 'Disk IOPS',
      graphLines: [
        { name: 'Read', values: [] },
        { name: 'Write', values: [] },
      ],
    },
  ];
  
  return <Metrics timeRange={mockTimeRange} metrics={mockMetricsData} />;
};

export { Default };
