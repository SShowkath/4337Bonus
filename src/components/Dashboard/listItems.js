import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';import PeopleIcon from '@mui/icons-material/People';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AssignmentIcon from '@mui/icons-material/Assignment';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
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
      <Link href="./AssignPage" underline="hover" color="black" >Staff Assignment</Link>
    </ListItemButton>    
    <ListItemButton>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <Link href="./EventPage" underline="hover" color="black" >Events</Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <OndemandVideoIcon />
      </ListItemIcon>
      <Link href="./VideoPage" underline="hover" color="black" >Videos</Link>
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
      <Link href="./MedHistory" underline="hover" color="black" >Medical Histories</Link>
    </ListItemButton>
  </React.Fragment>
);
