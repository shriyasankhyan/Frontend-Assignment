import React from 'react';

const FormattedDate = ({ timeRange }) => {
  const formatDate = (timestamp, options) =>
    new Date(timestamp).toLocaleString('en-US', options).replace(/,/g, '');

  return (
    <span className='ml-2'>
      {formatDate(timeRange.startTs, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      })} →{' '}
      {formatDate(timeRange.endTs, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      })}
    </span>
  );
};

export default FormattedDate;
