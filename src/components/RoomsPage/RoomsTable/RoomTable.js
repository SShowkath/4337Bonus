import React, { useEffect, useState } from 'react'
import DataTable from '../../DataTable/DataTable'




const RoomColumns = [
    { field: 'id', headerName: 'Room ID', width: 150 },
    { field: 'Faculty_Size', headerName: 'Faculty Size', width: 150 },
    { field: 'RoomsAvailable', headerName: 'Rooms Available', width: 150 },
    { field: 'NumUrineSamples', headerName: 'Number of Urine Samples', width: 200 },
    { field: 'NumStoolSamples', headerName: 'Number of Stool Samples', width: 200 },
    { field: 'NumBloodSamples', headerName: 'Number of Blood Samples', width: 200 },
    { field: 'NumMale', headerName: 'Number of Male Babies', width: 175 },
    { field: 'NumFemale', headerName: 'Number of Female Babies', width: 175 },
    { field: 'NumAvailableMedicine', headerName: 'Available Medicine', width: 150 },
    { field: 'NumPatientRecords', headerName: 'Number of Patient Records', width: 200 },

];

const StaffTable = () => {
    const [rooms, setRooms] = useState([]);    

    useEffect(() => {
        fetch('http://localhost/devtest/react/department.php')
            .then((response) => response.json())
            .then((json)=> setRooms(json))

    }, []);

  return (
    <DataTable
        rows={rooms}
        columns={RoomColumns}
    />
  );
};

export default StaffTable;