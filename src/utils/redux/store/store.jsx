import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "../slice/studentsSlice";
import { schoolSlice } from "../slice/schooSlice";
import { teacherSlice } from "../slice/teacherSlice";

const store=configureStore({
    reducer:{
        students:studentSlice.reducer,
        school:schoolSlice.reducer,
        teachers:teacherSlice.reducer
    }
})
export default store;
