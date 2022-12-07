import React, { useEffect, useState } from 'react'
import DataTable from '../../DataTable/DataTable'




const columns = [
    { field: 'Fname', headerName: 'First Name', width: 150 },
    { field: 'Lname', headerName: 'Last name', width: 150 },
    { field: 'Address', headerName: 'Address', width: 325 },
    { field: 'State', headerName: 'State', width: 150 },
    { field: 'Zip_Code', headerName: 'Zip Code', width: 150 },
    { field: 'Phone_Number', headerName: 'Phone Number', width: 150 },
    { field: 'Experience', headerName: 'Years of Experience', width: 150 },
    { field: 'Section_ID', headerName: 'Department/Room Number', width: 200 },
    { field: 'NumPatients', headerName: 'Number of Patients', width: 150 },
    { field: 'NurseNumPatients', headerName: 'Nurse Patients', width: 150 },
    { field: 'Field', headerName: 'Field', width: 150 },

];

const StaffTable = () => {
    const [users, setUsers] = useState([]);    

 
    useEffect(() => {
        fetch('http://localhost/devtest/react/employee.php')
            .then(response => response.json())
            .then(json => setUsers(json))

    }, []);

  return (
    <DataTable
        rows={users}
        columns={columns}
    />
  );
};

export default StaffTable;