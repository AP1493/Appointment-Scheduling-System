import React, { useEffect, useState } from "react";
import DoctorList from "./DoctorList";
import axios from "axios";
const Search = () => {
    // const [doctors, setDoctors] = useState([]);
    let doctors = [ { "_id": "650ecb4ebb66c7668bd7e4fc", "name": "urvish", "phoneNumber": "8849906066", "email": "urvish@urvish.com", "password": "$2a$10$khevy7wAY5YBrGQUhkWHDevCDoMPxwEctHBjszZjZ3CXnZ1ynjZVO", "age": "very young", "speciality": "all-rounder", "venue": "everywhere", "createdAt": "2023-09-23T11:26:06.410Z", "updatedAt": "2023-09-23T11:26:06.410Z", "__v": 0 }, { "_id": "650ecb71bb66c7668bd7e4fe", "name": "alay", "phoneNumber": "8849906066", "email": "alay@daiict.com", "password": "$2a$10$Gxoa7Pp.IYj3v/YAjThzR.tDX/YG4.JO7vRtQlkQOugeypWCsvds6", "age": "very young", "speciality": "all-rounder", "venue": "everywhere", "createdAt": "2023-09-23T11:26:41.095Z", "updatedAt": "2023-09-23T11:26:41.095Z", "__v": 0 }, { "_id": "650ecb81bb66c7668bd7e500", "name": "kevin", "phoneNumber": "8849906066", "email": "kevin@kevin.com", "password": "$2a$10$8bePVeS9Sii19WFvK9EUHeXGl2PiytBEvP0hd3.5TiW5SjZBD1Fii", "age": "very young", "speciality": "all-rounder", "venue": "everywhere", "createdAt": "2023-09-23T11:26:57.290Z", "updatedAt": "2023-09-23T11:26:57.290Z", "__v": 0 }, { "_id": "650ecb8dbb66c7668bd7e502", "name": "uday", "phoneNumber": "8849906066", "email": "uday@uday.com", "password": "$2a$10$Lgq6UWKfBDWwFy2x2UCuj.dDcxfYeB./aFYyQlidW5Tea2k0hCQaC", "age": "very young", "speciality": "all-rounder", "venue": "everywhere", "createdAt": "2023-09-23T11:27:09.807Z", "updatedAt": "2023-09-23T11:27:09.807Z", "__v": 0 }, { "_id": "650ecb9dbb66c7668bd7e504", "name": "pratham", "phoneNumber": "8849906066", "email": "pratham@pratham.com", "password": "$2a$10$UyZ45.vICzXh9rlttmQVSeFW54IylxlyqR7GDwP48l.DvOLz6rU7q", "age": "very young", "speciality": "all-rounder", "venue": "everywhere", "createdAt": "2023-09-23T11:27:25.923Z", "updatedAt": "2023-09-23T11:27:25.923Z", "__v": 0 } ]
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     await axios
    //       .get("/doctor/list")
    //       .then((response) => {
    //         console.log(response);
    //         setDoctors(response.doctors);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    //   fetchData();
    // },[]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) ||
        doctor.email.toLowerCase().includes(query.toLowerCase()) || 
        doctor.speciality.toLowerCase().includes(query.toLowerCase()) ||
        doctor.venue.toLowerCase().includes(query.toLowerCase())
        // doctor.location.toLowerCase().includes(query.toLowerCase()) ||
    );
    setFilteredDoctors(filtered);
  };


  return (
    <div>
      <h1>Doctor Directory</h1>
      <input
        type="text"
        placeholder="Search by name, location, or specialty"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <DoctorList doctors={filteredDoctors} />
    </div>
  );
};

export default Search;
