import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';import PeopleIcon from '@mui/icons-material/People';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from '@mui/material/Link';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link href="./StaffPage" underline="hover" color="black" >Staff</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MeetingRoomIcon />
      </ListItemIcon>
      <Link href="./Rooms" underline="hover" color="black" >Rooms</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Assign" />
    </ListItemButton>    
    <ListItemButton>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <Link href="./Events" underline="hover" color="black" >Events</Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Patients
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <Link href="./Patients" underline="hover" color="black" >Patient Information</Link>

    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Medical History" />
    </ListItemButton>
  </React.Fragment>
);
