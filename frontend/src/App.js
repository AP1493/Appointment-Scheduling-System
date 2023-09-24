import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProfilePage from "./componants/AdminProfilePage";
import LandingPage from "./componants/LandingPage";
import Form from "./componants/Form";
import Layout from "./componants/Layout";
import AdminLogin from "./componants/AdminLogin";
import "./App.css";
import AdminDashboard from "./componants/AdminDashboard";
import PatientDashboard from "./componants/PatientDashboard";
import DoctorDashboard from "./componants/DoctorDashboard";
import Calender from "./componants/Calender";
import DoctorRegistration from "./componants/DoctorRegistration";

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path='/adminprofile' element={<AdminProfilePage />} />
            </Route>
            
            <Route path='/form' element={<Form />} />
            <Route path='/adminLogin' element={<AdminLogin />} />
            <Route path='/adminDashboard' element={<AdminDashboard />} />
            <Route path='/doctorRegistration' element={<DoctorRegistration />} />
            <Route path='/patientDashboard' element={<PatientDashboard />} />
            <Route path='/doctorDashboard' element={<DoctorDashboard />} />
            <Route path='/calendar' element={<Calender />} />
            
            <Route
              path='/calender'
              element={<Calender startAccessor='start' endAccessor='end' />}
            />

          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
