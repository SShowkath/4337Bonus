import React, { useEffect, useState } from 'react'
import { Scheduler } from "@aldabil/react-scheduler";
import EventPageTitle from "./EventPageTitle";


export default function EventPage() {
  
  const [Events, setEvents] = useState([]);    

  useEffect(() => {
      fetch('http://localhost/devtest/react/event.php')
          .then((response) => response.json())
          .then((json) => setEvents(json))
    
  }, []);

    const eventArr =[]
    let k = 0;

    for (let i = 0; i < Events.length; i++)
    {
      if (Events[i].appNameOfEvent != null)
      {
        eventArr[k++] = {event_id: Events[i].id, 
                      title: Events[i].appNameOfEvent, 
                      start: new Date(Events[i].DateOfEvent + " 09:30"),
                      end: new Date(Events[i].DateOfEvent + " 10:30")};
                      
      }
      else if (Events[i].aweNameOfEvent != null)
      {
        eventArr[k++] = {event_id: Events[i].id, 
          title: Events[i].aweNameOfEvent, 
          start: new Date(Events[i].DateOfEvent + " 09:30"),
          end: new Date(Events[i].DateOfEvent + " 10:30")};
      } 
      
      else if (Events[i].bloNameOfEvent != null)
      {
        eventArr[k++] = {event_id: Events[i].id, 
          title: Events[i].bloNameOfEvent, 
          start: new Date(Events[i].DateOfEvent + " 09:30"),
          end: new Date(Events[i].DateOfEvent + " 10:30")};
      } 
      
      else{
        eventArr[k++] = {event_id: Events[i].id, 
          title: Events[i].demNameOfEvent, 
          start: new Date(Events[i].DateOfEvent + " 09:30"),
          end: new Date(Events[i].DateOfEvent + " 10:30")};
          } 
      }
    console.log(eventArr);
    
  return (
    <div className = "EventPage">
    <EventPageTitle />
    <Scheduler
    view="month"
    events={eventArr}
  />
</div>
  );

}


