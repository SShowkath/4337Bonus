import React from 'react';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Your Salary',
      data: Array.from({ length: 1 }, () => ({
        x: faker.datatype.number({ min: 0, max: 50 }),
        y: faker.datatype.number({ min: 100000, max: 450000 }),
        r: faker.datatype.number({ min: 5, max: 5 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Colleagues\' Salaries',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: 0, max: 50 }),
        y: faker.datatype.number({ min: 100000, max: 450000 }),
        r: faker.datatype.number({ min: 5, max: 5 }),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Table() {
   
  return <Bubble options={options} data={data} />;

}
