import PatientTable from "./PatientTable/PatientTable";
import PatientsTitle from "./PatientsTitle";
import {PieChart} from "./PieChart";
import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

function Patients() {
  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 0,
          width: 1500,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  return (
    <div style={{ width: '100%' }}>
    <PatientsTitle/>
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Item><PatientTable/></Item>
        <Item><PieChart/></Item>
      </Box>
  
    </div>
  );
}

export default Patients;
