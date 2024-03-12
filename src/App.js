import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logs from './components/Logs';
import Metrics from './components/Metrics';
import Storybook from './components/Storybook';
import { useState, useEffect } from 'react';

function App() {
  const [selected, setSelected] = useState('Last 5 minutes');
  const [timeRange, setTimeRange] = useState({
    startTs: Date.now()- 5*60*1000,
    endTs: Date.now(),
  });

  useEffect(() => {
    const now = Date.now();
    const calculateTimeRange = (minutes) => ({
      startTs: now - minutes * 60 * 1000,
      endTs: now,
    });

    switch (selected) {
      case 'Last 15 minutes':
        setTimeRange(calculateTimeRange(15));
        break;
      case 'Last 30 minutes':
        setTimeRange(calculateTimeRange(30));
        break;
      case 'Last 1 hour':
        setTimeRange(calculateTimeRange(60));
        break;
      case 'Last 3 hours':
        setTimeRange(calculateTimeRange(180));
        break;
      case 'Last 6 hours':
        setTimeRange(calculateTimeRange(360));
        break;
      default:
        setTimeRange(calculateTimeRange(5)); 
        break;
    }
  }, [selected]);

  return (
    <BrowserRouter>
      <div className="App bg-white">
        <Navbar selected={selected} setSelected={setSelected} />
        <Routes>
          <Route path="/logs" element={<Logs timeRange={timeRange} />} />
          <Route path="/metrics" element={<Metrics timeRange={timeRange} />} />
          <Route path="/storybook" element={<Storybook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
