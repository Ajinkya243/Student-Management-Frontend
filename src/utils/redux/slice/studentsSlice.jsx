import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
export const fetchStudents=createAsyncThunk("students/fetchStudents",async()=>{
    const response=await axios.get("https://student-management-backend-amber.vercel.app/students");
    return response.data;
})

export const addStudent=createAsyncThunk("students/addStudent",async(studentData)=>{
    const response=await axios.post("https://student-management-backend-amber.vercel.app/students",studentData);
    return response.data;
})

export const updateStudent=createAsyncThunk('students/updateStudent',async(student)=>{
    const response=await axios.post(`https://student-management-backend-amber.vercel.app/students/${student._id}`,student);
    return response.data;
})

export const deleteStudent=createAsyncThunk("students/deleteStudent",async(id)=>{
    console.log('inside deletstudent',id);
    const response=await axios.delete(`https://student-management-backend-amber.vercel.app/students/${id}`);
    return response.data;
})

export const studentSlice=createSlice({
   name:'students',
   initialState:{
    students:[],
    status:'idle',
    error:null
   } ,
   reducers:{

   },
   extraReducers:(builder)=>{
    builder.addCase(fetchStudents.pending,state=>{
        state.status="loading"
    })
    builder.addCase(fetchStudents.fulfilled,(state,action)=>{
        state.status='success';
        state.students=action.payload
    })
    builder.addCase(fetchStudents.rejected,(state,action)=>{
        state.status="rejected";
        state.error=action.payload;
    })
    builder.addCase(addStudent.pending, (state) => {
        state.status = "loading";
      })
      builder.addCase(addStudent.fulfilled, (state, action) => {
        state.status = "success";
        state.students.push(action.payload);
      })
      builder.addCase(addStudent.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
      builder.addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.map(student =>
            student._id === action.payload._id ? action.payload : student
        ); 
    })
    builder.addCase(deleteStudent.fulfilled,(state,action)=>{
        state.students=state.students.filter(el=>el._id!==action.payload._id)
    })
   }
})