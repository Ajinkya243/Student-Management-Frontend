import Navbar from "../nav/Navbar";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTeacher } from "../../utils/redux/slice/teacherSlice";
const TeacherDetails=()=>{
    const location=useLocation();
    const teacher=location.state.el;
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleClick=async()=>{
       const response= await dispatch(deleteTeacher(teacher._id));
        if(response.meta.requestStatus==='fulfilled'){
            navigate("/teachers")
        }
    }
    return(
        <>
        <Navbar/>
        <div className="container">
        <h2>Teacher Details</h2>
        <p>Name: {teacher.name}</p>
        <p>Subject: {teacher.subject}</p>
        <p>Rating: {teacher.rating}</p>
        <p>Gender: {teacher.gender}</p>
        <Link to="/teachers/add" state={{teacher}} className="btn btn-primary">Edit</Link>
        <button className="btn btn-danger" onClick={handleClick}>Delete</button>
        </div>
        </>
    )

}
export default TeacherDetails;