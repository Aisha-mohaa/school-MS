import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin";
import Students from "./pages/studentd";
import Teachers from "./pages/teachers";
import Attendance from "./pages/atendence";
import Fees from "./pages/fees";
import Exam from "./pages/exams";
import Report from "./pages/reports";
import AddStudent from "./components/addStudent";
import Update from "./components/update";
import AddTeacher from "./components/addTeaher";
import AttendanceRecord from "./pages/RecordAttendece";
import Addfees from "./components/addFees";
// import UpdateTeacher from "./components/updateTeacher";

function App (){
  return <>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/students" element={<Students/>} />
    <Route path="/teachers" element={<Teachers/>} />
    <Route path="/atendence" element={<Attendance/>} />
    <Route path="/fees" element={<Fees/>} />
    <Route path="/exams" element={<Exam/>} />
    <Route path="/record" element={<AttendanceRecord/>} />
    <Route path="/reports" element={<Report/>} />



    <Route path="/addstudent" element={<AddStudent/>} />
    <Route path="/addteacher" element={<AddTeacher/>} />
    <Route path="/addfees" element={<Addfees/>} />
    <Route path="/update" element={<Update/>} />
    {/* <Route path="/updateTeacher" element={<UpdateTeacher/>} /> */}
  </Routes>
 
  </>
}

export default App