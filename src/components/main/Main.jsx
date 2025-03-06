import { fetchStudents } from "../../utils/redux/slice/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
const Main=()=>{
    const dispatch=useDispatch();
    const {students,status,error}=useSelector(state=>state.students);
    useEffect(()=>{
        dispatch(fetchStudents());
    },[])
    return(
        <div className="container">
            <h1>Student View</h1>
            <Link className="btn btn-warning" to="/students/add">Add Student</Link>
            <h2>Students List</h2>
            {status==='loading'  &&  <p>Loading...</p>}
            <ul>
                {students?.map(el=>(
                    <li key={el._id}><Link to={`/students/${el._id}`}>{el.name} (Age: {el.age})</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default Main;