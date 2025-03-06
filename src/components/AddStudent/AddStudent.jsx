import Navbar from "../nav/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent, updateStudent } from "../../utils/redux/slice/studentsSlice";
import { useLocation } from "react-router-dom";
const AddStudent=()=>{
    const dispatch=useDispatch();
    const location=useLocation();
    const studentToEdit = location.state?.student || null;
    const [student, setStudent] = useState({
        name: studentToEdit ? studentToEdit.name : "",
        age: studentToEdit ? studentToEdit.age : "",
        gender: studentToEdit ? studentToEdit.gender : "Male",
        grade: studentToEdit ? studentToEdit.grade : "",
        attendance:studentToEdit?studentToEdit.attendance:0,
        marks:studentToEdit?studentToEdit.marks:0
    });

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addStudent(student));
        setStudent({ name: "", age: "", gender: "", grade: "" });
    }

    const handleUpdate=(event)=>{
        event.preventDefault();
        dispatch(updateStudent({...student,_id:studentToEdit._id}))
    }
    return(
        <div>
            <Navbar/>
            <div className="container py-5">
            {!studentToEdit?<h2>Add Student</h2>:<h2>Edit Student</h2>}
            <form>
                <input type="text" placeholder="Name" value={student.name} onChange={event=>setStudent(prev=>({...prev,name:event.target.value}))}/>
                <br /> <br />
                <input type="number" placeholder="Age" value={student.age} onChange={event=>setStudent(prev=>({...prev,age:event.target.value}))}/>
                <br /> <br />
                <input type="text" placeholder="Grade" value={student.grade} onChange={event=>setStudent(prev=>({...prev,grade:event.target.value}))} />
                <br /> <br />
                <label htmlFor="">Gender: </label>
                <input type="radio" name="gender" value="Male"  checked={student.gender === "Male"} 
    onChange={(e) => setStudent((prev) => ({ ...prev, gender: e.target.value }))} />Male
                <input type="radio" name="gender" value="Female" checked={student.gender === "Female"} 
    onChange={(e) => setStudent((prev) => ({ ...prev, gender: e.target.value }))}  />Female
                <br /> <br/>
                {studentToEdit && <div>
                    <input type="number" placeholder="Attendance" 
                    value={student.attendance}
                    onChange={event=>setStudent(prev=>({...prev,attendance:+event.target.value}))}/> <br />
                    <br />
                    <input type="number" placeholder="Marks"
                    value={student.marks} onChange={event=>setStudent(prev=>({...prev,marks:+event.target.value}))} />
                    </div>}
                    <br /><br />
                {!studentToEdit ?<button onClick={handleSubmit} className="btn btn-primary">Add</button>:<button onClick={handleUpdate} className="btn btn-primary">Update</button>}
            </form>
            </div>
        </div>
    )
}
export default AddStudent;