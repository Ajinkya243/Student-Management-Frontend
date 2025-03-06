import { useEffect } from "react";
import { fetchTeacher } from "../../utils/redux/slice/teacherSlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
const Teacher=()=>{
    const {teachers,status,error}=useSelector(state=>state.teachers);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchTeacher());
    },[])
    return(
        <>
        <Navbar/>
        <div className="container py-5">
         <Link to="/teachers/add" className="btn btn-warning">Add Teacher</Link>   
        <h2>Teachers List</h2>
        {status==='loading' && <p>Loading...</p>}
        <ul>
        {teachers.map(el=>(
            <li><Link to="/teachers/details" state={{el}}>{el.name} Rating:{el.rating}</Link></li>
        ))}
        </ul> 
        </div>
        </>
        
    )
}
export default Teacher;