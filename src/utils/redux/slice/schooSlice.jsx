import { createSlice } from "@reduxjs/toolkit"


export const schoolSlice=createSlice({
    name:'school',
    initialState:{
        totalStudents:0,
        averageAttendance:0,
        averageMarks:0,
        topStudent:null
    },
    reducers:{
        updateSchoolStats:(state,action)=>{
            Object.assign(state, action.payload);
        }
    }
})

export const {updateSchoolStats}=schoolSlice.actions;
export default schoolSlice.reducer;