import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  
  const labels = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Кол-во завершенных задач',
        data: labels.map(() => 2),
        borderColor: 'rgb(41, 161, 156)',
        backgroundColor: 'rgba(41, 161, 156, 0.5)',
      },
    ],
  };

function Chart() {
  return (
    <Line options={options} data={data} />
  )
}

export default Chart