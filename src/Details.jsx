import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import 'chartjs-adapter-date-fns'; 

const Details = ({ jsont, id ,setFinish }) => {
  const [tickers, setTickers] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
      .then(res => {
        setTickers(res.data.prices);
        
      });
  }, [id]);

  useEffect(() => {
    if (tickers.length > 0 && chartRef.current) {
      const newChartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: tickers.map(price => new Date(price[0])),
          datasets: [{
            label: 'Coin Prices in Last 7 Days',
            data: tickers.map(price => price[1]),
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(255, 99, 132)' ,
            tension: 0.1,
            fill: false,
          }]
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day', 
                displayFormats: {
                  day: 'MMM dd, yyyy'
                },
                tooltipFormat: 'MMM dd, yyyy h:mma'
              },
              title: {
                display: false,
                text: 'date' ,
                
              } , ticks:{
                color: "red"
              }
            },   y: {
              title: {
                display: true,
                text: 'Price (USD)' ,
                color : 'rgb(75, 192, 192)'
              }, ticks:{
                color: "red"
              }
          } 
        },
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.dataset.label + ': $' + tooltipItem.parsed.y.toFixed(2) + ' at ' + tooltipItem.dataset.label;
              }
            }
          },
        
        }
      });
      return () => {
        if (newChartInstance) {
          newChartInstance.destroy();
        }
      };
    }
  }, [tickers]);

  return (
    <div>
      <button className='bg-slate-300 px-5 py-3 mt-2 mr-10 rounded-lg fixed right-0 top-0 ' onClick={()=>setFinish(false)}>close</button>
      <div className=' flex flex-row justify-center'>
      {jsont.map((item, index) => (
        <div key={index} className='flex flex-row space-x-4 bg-slate-500 mt-20 items-center px-20 py-10 rounded-lg'>
          <img src={item.image.large} style={{ width: "250px" }} alt={item.id} />
          <span>ID: {item.id}</span>
          <span>name: {item.name}</span>
          <span>last update: {item.last_updated}</span>
          <div>Symbol: {item.symbol}</div>
        </div>
      ))}
      </div>
      <div className='w-4/5'>
      <canvas className='mb-[50pt]' ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Details;
