import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux'
import store from './utils/redux/store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StudentDetails from './components/StudentDetails/StudentDetails';
import AddStudent from './components/AddStudent/AddStudent';
import UpdateStudent from './components/UpdateStudent/UpdateStudent';
import Class from './components/Class/Class';
import School from './components/School/School';
import Teacher from './components/Teacher/Teacher';
import AddTeacher from './components/AddStudent/AddTeacher';
import TeacherDetails from './components/StudentDetails/TeacherDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path="/students/:id" element={<StudentDetails/>}/>
      <Route path="/students/add" element={<AddStudent/>} />
      <Route path="/students/edit" element={<UpdateStudent/>}/>
      <Route path="/class" element={<Class/>}/>
      <Route path="/school" element={<School/>}/>
      <Route path="/teachers" element={<Teacher/>}/>
      <Route path="/teachers/add" element={<AddTeacher/>} />
      <Route path="/teachers/details" element={<TeacherDetails/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
