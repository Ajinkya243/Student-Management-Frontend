import Navbar from "../nav/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacher, updateTeacher } from "../../utils/redux/slice/teacherSlice";
import { useLocation, useNavigate } from "react-router-dom";
const AddTeacher=()=>{
    const location=useLocation();
    const teacherToEdit = location.state ? location.state.teacher : null;
    const[teacher,setTeacher]=useState({
        name:teacherToEdit?teacherToEdit.name:"",
        subject:teacherToEdit?teacherToEdit.subject:"",
        rating:teacherToEdit?teacherToEdit.rating:"",
        gender:teacherToEdit?teacherToEdit.gender:'Male'
    })
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const response=await dispatch(addTeacher(teacher));
        if(response.meta.requestStatus==='fulfilled'){
            setTeacher({name:"",subject:"",rating:"",gender:""})
            navigate("/teachers");
        }
    }
    const handleUpdate=async(event)=>{
        event.preventDefault();
        const response=await dispatch(updateTeacher({...teacher,_id:teacherToEdit._id}));
        if(response.meta.requestStatus==='fulfilled'){
            setTeacher({name:"",subject:"",rating:"",gender:""});
            navigate("/teachers");
        }
        
    }
    return(
        <>
        <Navbar/>
        <div className="py-5 container">
            {!teacherToEdit?<h2>Add Teacher</h2>:<h2>Edit Teacher</h2>}
            <form>
            <input type="text" placeholder="Name" value={teacher.name} onChange={event=>setTeacher(prev=>({...prev,name:event.target.value}))} /> <br /><br />
            <input type="text" placeholder="Subject" value={teacher.subject} onChange={event=>setTeacher(prev=>({...prev,subject:event.target.value}))} /> <br /><br />
            <input type="text" placeholder="Rating" value={teacher.rating} onChange={event=>setTeacher(prev=>({...prev,rating:+event.target.value}))} /> <br /> <br />
            <label>Gender: </label>
            <input type="radio" name="gender" checked={teacher.gender==='Male'} value="Male" onChange={event=>setTeacher(prev=>({...prev,gender:event.target.value}))}  />Male
            <input type="radio" name="gender" checked={teacher.gender==='Female'} value="Female" onChange={event=>setTeacher(prev=>({...prev,gender:event.target.value}))} />Female
            <br /><br />
            {!teacherToEdit?<button className="btn btn-primary" onClick={handleSubmit}>Add</button>:<button className="btn btn-primary" onClick={handleUpdate}>Update</button>}
            </form>
        </div>
        </>
    )
}
export default AddTeacher;