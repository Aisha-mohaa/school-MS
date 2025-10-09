import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin";
import Students from "./pages/studentd";

function App (){
  return <>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/students" element={<Students/>} />
  </Routes>
 
  </>
}

export default App