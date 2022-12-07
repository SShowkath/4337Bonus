import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};



 
 export function Table() {
    const [Salaries, setSalaries] = useState([]);    

    useEffect(() => {
        fetch('http://localhost/devtest/react/employee.php')
            .then((response) => response.json())
            .then((json) => setSalaries(json))
      
    }, []);
    
    const DocArr =[];
    const NurArr =[];
    let a =0;
    let b =0;
    for (let i = 0; i < Salaries.length; i++)
    {
      if (Salaries[i].Nurses_SSN == null)
        DocArr[a++] = Salaries[i].Salary;
      else 
      {
        NurArr[b++] = Salaries[i].Salary;
      }
    }
    let k = 0;
    let j = 0;
    let c = 0;
    const data = {
      datasets: [
        {
          label: 'Doctor Salaries',
          data: Array.from({ length: DocArr.length }, () => ({
            x: k++,
            y: DocArr[j++],
          })),
          backgroundColor: 'rgba(33, 150, 243)',
        },
        {
          label: 'Nurse Salaries',
          data: Array.from({ length: NurArr.length}, () => ({
            x: k++,
            y: NurArr[c++],
          })),
          backgroundColor: 'rgba(250,0,0)',
        },

      ],
    };


    return <Scatter options={options} data={data} />;

};
