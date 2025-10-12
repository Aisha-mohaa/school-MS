import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin";
import Students from "./pages/studentd";
import Teachers from "./pages/teachers";

function App (){
  return <>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/students" element={<Students/>} />
    <Route path="/teachers" element={<Teachers/>} />
  </Routes>
 
  </>
}

export default App