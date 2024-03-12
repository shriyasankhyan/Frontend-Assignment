import React from 'react';
import { useEffect, useState } from 'react';
import {MimicMetrics} from "../api/api-mimic";
import LineChart  from './subcomponents/LineChart';
import FormattedDate from './subcomponents/FormattedDate';
import AreaChart from './subcomponents/AreaChart';
import { Navbar } from './Navbar';

const Metrics = ({timeRange, selected, setSelected}) => {

  const [metrics, setMetrics] = useState([]);

  useEffect(() =>{
    const getMetrics = async () =>{
      try{
        const fetchedMetrics = await MimicMetrics.fetchMetrics(timeRange);
        setMetrics(fetchedMetrics);
      }catch(error){
        console.log("Not able to fetch metrics: " , error);
      }
    }
    getMetrics();
  },[timeRange])


  return (
    <>
    <Navbar selected={selected} setSelected={setSelected}/>
    <div className='bg-white'>
    <div className="border border-[#CEE0F8] m-5 rounded">
    <div className='border border-[#CEE0F8] rounded flex items-center h-20 p-4'>
  <div className="flex items-center">
    <h1 className='text-3xl mx-5'>
      <b>Metrics</b>
    </h1>
   <FormattedDate timeRange={timeRange}/>
  </div>
</div>
     
      <div className='flex flex-wrap bg-[#F0F7FF]/50'>
        {metrics.map((metric, index) => (
          index !== 3 ?<LineChart metric = {metric} key={index}/> :<AreaChart metric = {metric} key={index}/>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Metrics;
