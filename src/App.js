import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logs from './components/Logs';
import Metrics from './components/Metrics';
import Storybook from './components/Storybook';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import {getTimeRange} from "./Helper Function/TimeRange"

function App() {
  const [selected, setSelected] = useState('Last 5 minutes');
  const [timeRange, setTimeRange] = useState({
    startTs: Date.now()- 5*60*1000,
    endTs: Date.now(),
  });

  useEffect(() => {
    setTimeRange(getTimeRange(selected))
  }, [selected]);

  return (
    <BrowserRouter>
      <div className="App bg-white">
        <Routes>
        <Route path='/' element={<Navbar selected={selected} setSelected={setSelected}/>}/>
          <Route path="/logs" element={<Logs timeRange={timeRange} selected={selected} setSelected={setSelected} />} />
          <Route path="/metrics" element={<Metrics timeRange={timeRange} selected={selected} setSelected={setSelected}  />} />
          <Route path="/storybook/*" element={<Storybook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
