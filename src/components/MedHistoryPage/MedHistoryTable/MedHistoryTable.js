import React, { useEffect, useState } from 'react'
import DataTable from '../../DataTable/DataTable'




const columns = [
    { field: 'Fname', headerName: 'First Name', width: 150 },
    { field: 'Lname', headerName: 'Last name', width: 150 },
    { field: 'Date_Admitted', headerName: 'Date Admitted', width: 200 },
    { field: 'Date_Discharged', headerName: 'Discharge Date', width: 150 },
    { field: 'Institution', headerName: 'Nurse Institution', width: 250 },
    { field: 'Current_Diagnosis', headerName: 'Current Diagnosis', width: 250 },

];

const StaffTable = () => {
    const [History, setHistory] = useState([]);    

 
    useEffect(() => {
        fetch('http://localhost/devtest/react/medhistory.php')
            .then(response => response.json())
            .then(json => setHistory(json))

    }, []);

  return (
    <box>
    <DataTable
        rows={History}
        columns={columns}
    /></box>
  );
};

export default StaffTable;  