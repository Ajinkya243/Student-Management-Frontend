import { useSelector } from "react-redux";
import Navbar from "../nav/Navbar";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
const UpdateStudent=()=>{
    const[searchParams]=useSearchParams();
    const id=searchParams.get('studentId');
    const{students}=useSelector(state=>state.students);
    const student=students.find(el=>el._id===id);
    const[data,setData]=useState(student);
    return(
        <>
        <Navbar/>
        <div className="container">
            <h2>Edit Student</h2>
            <form>
            <input type="text" value={data.name} /><br /><br />
            <input type="number"  />
            </form>
        </div>
        </>
    )
}
export default UpdateStudent;