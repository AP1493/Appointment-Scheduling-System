import React from "react";
import { useNavigate } from "react-router-dom";
const DoctorList = ({ doctors }) => {
    const navigate = useNavigate();
    const handleOnClick = (doctor) => {
        localStorage.setItem('unity-doctor-id',doctor._id);
        navigate('/slotselection');
    }
    return (
      <div>
        {doctors.map((doctor, index) => (
          <div key={index} onClick={() => {handleOnClick(doctor)}} style={{margin: '30px'}}>
            <h3>Nmae : {doctor.name}</h3>
            <span>Location: {doctor.venue}</span>
            <span>Specialty: {doctor.speciality}</span>
            <span>Email: {doctor.email}</span>
          </div>
        ))}
      </div>
    );
};

export default DoctorList;