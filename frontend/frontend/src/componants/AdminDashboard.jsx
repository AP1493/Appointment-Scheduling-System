import React from 'react'
import DoctorRegistration from './DoctorRegistration';
import { useNavigate } from 'react-router-dom';
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import AdminProfilePage from './AdminProfilePage';

function AdminDashboard() {
    console.log("Admin dashboard")

    const navigate = useNavigate()

  return (
    <div>
      <MDBBtn onClick={()=>{ navigate("/doctorRegistration") }} className="mt-4" block>Doctor Registration</MDBBtn>
      <AdminProfilePage/>
    </div>
  )
}

export default AdminDashboard;
