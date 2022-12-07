import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export function PieChart() {
  
    const [NumPatients, setNumPatients] = useState([]);    
    
    useEffect(() => {
        fetch('http://localhost/devtest/react/patient.php')
            .then(response => response.json())
            .then(json => setNumPatients(json))

    }, []);

    const arr = [0,0,0,0,0,0];
    for (let i = 0; i < NumPatients.length; i++)
    {
        if (NumPatients[i].Section_ID < 2)
            arr[0]++;
        else if (NumPatients[i].Section_ID < 3)
            arr[1]++;
        else if (NumPatients[i].Section_ID < 4)
            arr[2]++;
        else if (NumPatients[i].Section_ID < 5)
            arr[3]++;
        else if (NumPatients[i].Section_ID < 6)
            arr[4]++;
        else if (NumPatients[i].Section_ID < 7)
            arr[5]++;
    }

    const data = {

  labels: ['ER/ICU', 'Laboratory', 'Maternity Ward', 'Pharmacy', 'Radiology', 'Records'],
  datasets: [
    {
      label: '# of Patients',
      data: arr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(251, 192, 147, 0.4)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

return <Pie data={data} />;


}