import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import StaffPage from "./components/StaffPage/StaffPage";
import Rooms from "./components/RoomsPage/Rooms";
import Events from "./components/EventsPage/Events";
import Patients from "./components/PatientInfoPage/Patients";
import MedHistory from "./components/MedHistoryPage/MedHistory";
import EventPage from "./components/Events/EventPage";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/StaffPage" element={<StaffPage />} />
      <Route path="/Rooms" element={<Rooms/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/Patients" element={<Patients/>} />
      <Route path ="/MedHistory" element={<MedHistory />} />
      <Route path ="/EventPage" element={<EventPage />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);