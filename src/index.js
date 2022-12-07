import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from "./components/Dashboard/Dashboard";
import StaffPage from "./components/StaffPage/StaffPage";
import Rooms from "./components/RoomsPage/Rooms";
import Patients from "./components/PatientInfoPage/Patients";
import MedHistory from "./components/MedHistoryPage/MedHistory";
import EventPage from "./components/Events/EventPage";
import VideoPage from "./components/VideoPage/VideoPage";
// import AssignPage from "./components/AssignPage/AssignPage";
import App from "./App";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/StaffPage" element={<StaffPage />} />
      <Route path="/Rooms" element={<Rooms/>} />
      <Route path="/Patients" element={<Patients/>} />
      <Route path ="/MedHistory" element={<MedHistory />} />
      <Route path ="/EventPage" element={<EventPage />} />
      <Route path ="/VideoPage" element={<VideoPage />} />
      {/* <Route path ="/AssignPage" element={<AssignPage />}/> */}

    </Routes>
  </Router>,

  document.getElementById("root")
);