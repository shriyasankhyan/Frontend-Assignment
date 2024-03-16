import React, { useEffect, useState, useRef } from 'react';
import { MimicLogs } from '../api/api-mimic';
import FormattedDate from './subcomponents/FormattedDate';
import { Navbar } from './Navbar';

const Logs = ({ timeRange, selected, setSelected }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newLogsCount, setNewLogsCount] = useState(0);
  const [oldestLog, setOldestLog] = useState(timeRange.endTs);
  const logsContainerRef = useRef(null);
  const logsEndRef = useRef(null);
  const limit = 100;

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedLogs = await MimicLogs.fetchPreviousLogs({
          ...timeRange,
          endTs: oldestLog,
          limit,
        });
  
        if (fetchedLogs.length > 0) {
          const sortedLogs = sortLogsByTimestamp(fetchedLogs);
          setLogs((prevLogs) => [...sortedLogs, ...prevLogs]);
          setOldestLog(sortedLogs[0].timestamp);
        }
      } catch (error) {
        console.error('Error fetching logs:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const sortLogsByTimestamp = (logsArray) => {
      return logsArray.sort((a, b) => a.timestamp - b.timestamp);
    };
  
   
    const handleScroll = () => {
      const isAtTop =
        logsContainerRef?.current?.scrollTop <= 100 &&
        logsContainerRef.current.scrollHeight > logsContainerRef.current.clientHeight-100;
      if (isAtTop) {
        fetchData();
      }
    };
  
    const handleLiveLog = (nextLog) => {
      setLogs(prevLogs => [...prevLogs, nextLog]);
      const isAtBottom =
        logsContainerRef?.current?.scrollTop + logsContainerRef.current.clientHeight >=
        logsContainerRef.current.scrollHeight - 50;
  
      if (isAtBottom) {
        setNewLogsCount(0);
        scrollToBottom();
      }else{
        setNewLogsCount(logCount => logCount+ 1);
      }
    };
    setLogs([]);
    logsContainerRef.current.addEventListener('scroll', handleScroll);
    fetchData();
    const unsubscribe = MimicLogs.subscribeToLiveLogs(handleLiveLog);
    scrollToBottom();
  

    return () => {
      unsubscribe();
    };
  }, [timeRange]);


  return (
    <>
    <Navbar selected={selected} setSelected={setSelected}/>
    <div className="flex flex-col h-screen">
      <div className='h-10 sticky top-0 bg-white z-10 text-right mr-5'>
        <h2 className="text-[#1C2A42] text-xl font-medium">
          Showing logs for<FormattedDate timeRange={timeRange} />
        </h2>
      </div>
      <div className="flex-1 text-left m-5 rounded-xl bg-black text-white overflow-auto" ref={logsContainerRef}>
      {loading && <div className='flex items-center justify-center p-2 bg-[#0E1623] text-[#82A0CE]'>
          <img src="/Assets/Sidepane/Spinner.svg" alt="Loading" />
          <p className='ml-2'>
            Loading previous 100 logs
          </p>
        </div>}
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              <p className="whitespace-nowrap overflow-x mx-4 px-2 text-[#5E7BAA] ">
                <span className='mr-2'>
                  {new Date(log.timestamp).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: false,
                    fractionalSecondDigits: 3,
                  })}
                </span>{' '}
                <span className='text-white'>{log.message}</span>
              </p>
            </li>
          ))}
          <div ref={logsEndRef} />
        </ul>
       
        { newLogsCount > 0 && <div onClick={() => scrollToBottom()} className="cursor-pointer flex items-center justify-end absolute bottom-20 right-14 p-2 bg-[#4338CA] text-[#E0ECFD]">
          <img src="/Assets/Sidepane/Spinner.svg" alt="Loading" />
          <p className='ml-2'>
            {newLogsCount} new logs
          </p>
          <img className='ml-2 h-4' src="/Assets/Sidepane/arrow-up-long.png" alt="Down" />
        </div>}
      </div>
    </div>
    </>
  );
};

export default Logs;
