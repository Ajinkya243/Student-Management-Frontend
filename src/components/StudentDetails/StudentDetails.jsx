import { useSelector, useDispatch } from "react-redux";
import Navbar from "../nav/Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteStudent, fetchStudents } from "../../utils/redux/slice/studentsSlice";
const StudentDetails=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    const {students,status,error}=useSelector(state=>state.students);
    const navigate=useNavigate();

    const handleDelete=async(id)=>{
       const response= await dispatch(deleteStudent(id));
       if (response.meta.requestStatus === "fulfilled") {
        navigate("/"); 
      }
    }   
    const student=students?.find(el=>el._id===id);
    

        
    return(
        <div>
            <Navbar/>
            {status==='loading' && <p>Loading...</p>}
            {error && <p>Error occur</p>}
            {student && <div className="container py-5">
            <h2>Student Details:</h2>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Attendance: {student.attendance}</p>
            <p>Marks:{student.marks}</p>
            <Link to="/students/add" state={{student}} className="btn btn-warning">Edit Details</Link>
            <button onClick={()=>handleDelete(student._id)} className="btn btn-danger">Delete</button>
            </div>}
        </div>
    )
}
export default StudentDetails;