import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTeacher=createAsyncThunk("teachers/fetchTeachers",async()=>{
    const response=await axios.get("https://student-management-backend-amber.vercel.app/teachers")
    return response.data
})

export const addTeacher=createAsyncThunk("teachers/addTeacher",async(teacher)=>{
    const response=await axios.post("https://student-management-backend-amber.vercel.app/teachers",teacher);
    return response.data;
})

export const updateTeacher=createAsyncThunk('teachers/updateTeacher',async(teacher)=>{
    const response= await axios.post(`https://student-management-backend-amber.vercel.app/teachers/${teacher._id}`,teacher);
    return response.data;
})

export const deleteTeacher=createAsyncThunk("teachers/deleteTeacher",async(id)=>{
    const response=await axios.delete(`https://student-management-backend-amber.vercel.app/teachers/${id}`);
    return response.data;
})

export const teacherSlice=createSlice({
    name:'teachers',
    initialState:{
        teachers:[],
        status:'idle',
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTeacher.pending,state=>{
            state.status="loading"
        })
        .addCase(fetchTeacher.fulfilled,(state,action)=>{
            state.status="success";
            state.teachers=action.payload
        })
        .addCase(fetchTeacher.rejected,state=>{
            state.status="rejected"
        })
        .addCase(addTeacher.pending,state=>{
            state.status="loading";
        })
        .addCase(addTeacher.fulfilled,(state,action)=>{
            state.teachers.push(action.payload);
        })
        .addCase(addTeacher.rejected,state=>{
            state.status='rejected'
        })
        .addCase(updateTeacher.fulfilled,(state,action)=>{
            state.teachers=state.teachers.map(el=>el._id===action.payload._id?action.payload:el);
        })
        .addCase(deleteTeacher.fulfilled,(state,action)=>{
            state.teachers=state.teachers.filter(el=>el._id!==action.payload._id);
        })
    }
})