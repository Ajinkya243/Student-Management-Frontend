import { useSelector, useDispatch } from "react-redux";
import Navbar from "../nav/Navbar"
import {updateSchoolStats} from '../../utils/redux/slice/schooSlice';
import { useEffect } from "react";
import { fetchStudents } from "../../utils/redux/slice/studentsSlice";

const School=()=>{
    const school=useSelector(state=>state.school);
    const{students}=useSelector(state=>state.students);
    const dispatch=useDispatch();
    const stats=useSelector(state=>state.school);
    useEffect(()=>{
        const totalStudents=students.length;
        const averageAttendance=(students.reduce((acc,cur)=>acc+cur.attendance,0)/students.length).toFixed(2);
        const averageMarks=(students.reduce((acc,cur)=>acc+cur.marks,0)/students.length).toFixed(2);
        const topStudent=students.reduce((acc,cur)=>cur.marks>acc.marks?cur:acc,students[0]);
        dispatch(updateSchoolStats({totalStudents,averageAttendance,averageMarks,topStudent}));
    },[students])
    useEffect(()=>{
        dispatch(fetchStudents());
    },[])
    return(
        <>
        <Navbar/>
        <div className="container">
            <h2>School View</h2>
            <p>Total Student: {stats.totalStudents}</p>
            <p>Average Attendance: {stats.averageAttendance}</p>
            <p>Average Marks: {stats.averageMarks}</p>
            <p>Top Student: {stats.topStudent?.name}</p>
        </div>
        </>
    )
}
export default School;