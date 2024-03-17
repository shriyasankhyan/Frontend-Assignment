const calculateTimeRange = (minutes) => ({
    startTs: Date.now() - minutes * 60 * 1000,
    endTs: Date.now()
});

const getTimeRange = (selected) =>{
    switch (selected) {
        case 'Last 15 minutes':
            return calculateTimeRange(15);
        case 'Last 30 minutes':
            return calculateTimeRange(30);
        case 'Last 1 hour':
            return calculateTimeRange(60);
        case 'Last 3 hours':
            return calculateTimeRange(180);
        case 'Last 6 hours':
            return calculateTimeRange(360);
        default:
            return calculateTimeRange(5);
      }
}

export {getTimeRange};