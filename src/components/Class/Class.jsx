import { useSelector, useDispatch } from "react-redux";
import Navbar from "../nav/Navbar"
import { useEffect, useState } from "react";
import { fetchStudents } from "../../utils/redux/slice/studentsSlice";

const Class = ()=>{
    const dispatch=useDispatch();
    const{students}=useSelector(state=>state.students);
    const[gender,setGender]=useState('All');
    const[type,setType]=useState('Name');
    
    const filteredStudents = students
        ?.filter(el => 
            gender === "All" || 
            (gender === "Male" && el.gender === "Male") || 
            (gender === "Female" && el.gender === "Female")
        )
        .sort((a, b) => 
            type === "Name" ? a.name.localeCompare(b.name) :
            type === "Marks" ? a.marks - b.marks :
            a.attendance - b.attendance
        );
    useEffect(()=>{
        dispatch(fetchStudents());
    },[])
    return(
        <>
        <Navbar/>
        <div className="container">
        <h2>Class View</h2>
        <label htmlFor="genderFilter">Filter by Gender:</label>
        <select name="" id="genderFilter" onChange={event=>setGender(event.target.value)}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <br />
        <br />
        <label htmlFor="sortData">Sort by:</label>
        <select name="" id="sortData" onChange={event=>setType(event.target.value)}>
            <option value="Name">Name</option>
            <option value="Marks">Marks</option>
            <option value="Attendance">Attendance</option>
        </select>
        <br />
        <br />
        <ul>
            {filteredStudents?.map(el=>(
                <li>{el.name} - {el.gender} - Marks:{el.marks} - Attendance:{el.attendance}</li>
            ))}
        </ul>
        </div>
        </>
    )
}
export default Class;