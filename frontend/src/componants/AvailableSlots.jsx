import React, { useState, useEffect } from "react";
import axios from "axios";
import './slots.css'
const AvailableSlots = () => {
  console.log("Inside the Available slots");

  let startTime = 8;
  let endTime = 20;
  const dataArray = ['8AM', '10AM', '3PM'];
  // localStorage.setItem("currentDoctor", "notUday");
  const dataToSend = {
    id: localStorage.getItem("currentDoctor"),
  };

  const handleClickEvent = (e) => {
    let dataToSend = {
        patient: localStorage.getItem('patientId'),
        doctor: localStorage.getItem('doctorId'),
        date: new Date().toString(),
        issue: '',
        timeOfArrival: ''
    }
    if(e.classList[0] === 'clickable'){
        let issue = window.prompt("Specify your issue if you want");
        if(issue) {}
    }
  }

  // useEffect(() => {
  //   let fetchedArray = [];
  //   const fetchData = async () => {
  //     await axios.post('/doctors/list', dataToSend)
  //       .then((response) => {
  //         setDataArray(response.data.appointments);
  //       })
  //       .catch((errr) => {
  //         console.log("Err", errr);
  //       })
  //   };
  //   fetchData();
  //   setDataArray(['8AM', '10AM', '8PM']);
  // }, []);

  const timeIntervals = [];
  // Generate time intervals
  while (startTime !== endTime) {
    let x = (startTime<12) ? "AM" : "PM";
    if(startTime === 12){
        timeIntervals.push(`${12+x} - ${1+x}`);    
    }else {
        if(startTime+1 === 12){
            timeIntervals.push(`${(startTime)%12+x} - ${1+x}`);
        }else {

            timeIntervals.push(`${(startTime)%12+x} - ${(startTime+1)%12+x}`);
        }
    }
    startTime++;
  }

  return (
    <div>
      {console.log("inside the available")}
      {timeIntervals.map((interval, index) => (
        
        <div
          key={index}
          className={dataArray.includes(timeIntervals[index].split(' ')[0]) ? "dull" : "clickable"}
            onClick={handleClickEvent}
        >
          {interval}
        </div>
      ))}
    </div>
  );
};

export default AvailableSlots;
