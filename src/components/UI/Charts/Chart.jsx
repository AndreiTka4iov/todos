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
import { useSelector } from 'react-redux';

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

function Chart() {
  const todos = useSelector(state => state.todos.success)

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Кол-во завершенных задач',
        data: labels.map((label) => {
          const result = todos.filter(todo => 
            todo.day === label
          )
          return result.length
        }),
        borderColor: 'rgb(41, 161, 156)',
        backgroundColor: 'rgba(41, 161, 156, 0.5)',
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  )
}

export default Chart