import React, { useEffect, useState } from 'react'
import DataTable from '../../DataTable/DataTable'


const columns = [
    { field: 'Fname', headerName: 'First Name', width: 150 },
    { field: 'Lname', headerName: 'Last name', width: 150 },
    { field: 'Address', headerName: 'Address', width: 325 },
    { field: 'State', headerName: 'State', width: 150 },
    { field: 'Zip_Code', headerName: 'Zip Code', width: 150 },
    { field: 'Phone_Number', headerName: 'Phone Number', width: 150 },
    { field: 'InsuranceProvider', headerName: 'Insurance Provider', width: 220 },
    { field: 'Section_ID', headerName: 'Department/Room Number', width: 200 },
    { field: 'InsuranceContact', headerName: 'Insurance Contact', width: 150 },
    { field: 'NumVisitors', headerName: 'Visitors Received', width: 150 },
    { field: 'TreatedBy', headerName: 'Doctor ID', width: 150 },

];

const PatientTable = () => {
    const [patients, setPatients] = useState([]);    

 
    useEffect(() => {
        fetch('http://localhost/devtest/react/patient.php')
            .then(response => response.json())
            .then(json => setPatients(json))

    }, []);

  return (
    <DataTable
        rows={patients}
        columns={columns}
    />
  );
};

export default PatientTable;