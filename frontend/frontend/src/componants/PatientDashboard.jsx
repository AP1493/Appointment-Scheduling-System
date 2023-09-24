import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import PatientProfilePage from './PatientProfilePage';

function AdminDashboard() {

  

  const navigate = useNavigate()

  return (
    <div>
      <MDBBtn onClick={()=>{ navigate("/calendar") }} className="mt-4" block>Calendar</MDBBtn>
      <PatientProfilePage/>
    </div>
  )
}

export default AdminDashboard;
