import React, { useState , useRef} from 'react';
import { Line, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ metric }) => {
  const chartRef = useRef();
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const labels = metric.graphLines[0].values.map(value => formatTime(value.timestamp));
  
  const getColor = (name) =>{
    if(name === "Used" || name === "Write") return "#DC2626";
    else if(name === "Read" || name === "Requested") return "#2563EB";
    else return "#059669";
  }

  const linesData = metric.graphLines.map((line) => ({
    label: line.name,
    data: line.values.map(value => ({
      x: value.timestamp, 
      y: value.value 
    })),
    backgroundColor: getColor(line.name),
    borderColor: getColor(line.name),
    pointRadius : 0,
    pointHoverRadius : 5, 
    pointHitRadius : 10,
  }));

  const [highlightedPoint, setHighlightedPoint] = useState();
  const [highlightData, setHighlightData] = useState([]);

  const handleClick = (e) =>{
    console.log(e)
    if(!getElementAtEvent(chartRef.current,e)[0] ){
      return;
    }

    const {datasetIndex, index} = getElementAtEvent(chartRef.current, e)[0];
    const points = [];
   
    if(highlightedPoint &&  highlightedPoint.datasetIndex === datasetIndex && highlightedPoint.index !== index){
    }else{
      setHighlightedPoint({datasetIndex, index});
      const newHighlightData = {
        label: "Selected region",
        data:  [{x: metric.graphLines[datasetIndex].values[index].timestamp,
        y: metric.graphLines[datasetIndex].values[index].value}],
        backgroundColor: "#F97316",
        borderColor: '#F97316',
        pointRadius: 5,
        fill: true
      };
      // setHighlightData([newHighlightData]);
      return;
    }

    const minInd = Math.min(highlightedPoint?.index , index);
    const maxInd = Math.max(highlightedPoint?.index, index);


    for(let i = minInd; i <= maxInd ; i++){
      points.push({datasetIndex, index : i, x : metric.graphLines[datasetIndex].values[i].timestamp})
    }

    setHighlightedPoint({datasetIndex, index});

    const newData  = points.map(point => ({
      x: metric.graphLines[point.datasetIndex].values[point.index].timestamp,
      y: metric.graphLines[point.datasetIndex].values[point.index].value
    }));

    const newHighlightData = {
      label: "Selected region",
      data: newData,
      backgroundColor: "#F97316",
      borderColor: '#F97316',
      pointRadius: 5,
      fill: true
    };

    // setHighlightData([newHighlightData]);

    }



  return (
    <div className='w-[45%] p-4 mx-auto my-5 bg-white border border-[#CEE0F8] rounded'>
      <Line
        ref={chartRef}
        data={{
          labels: labels,
          datasets:[ ...linesData, ...highlightData],
        }}
        onClick =  {(e) =>{
          handleClick(e);
        }}
        options={{
            plugins: {
            title: {
              display: true,
              text: metric.name,
            },
            legend : {
                position : "bottom",
            }
          },
          scales: {
            y :{
                position : 'right'
            },
            x : {
              min : (highlightData.length >= 2) ? highlightData[0].data[0].x : 0,
            }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
