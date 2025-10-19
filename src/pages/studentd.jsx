import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { FaUserGraduate, FaSearch, FaUserCircle, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Students() {
  const [Data, setData] = useState([]);
 const [searchTerm, setSearchTerm] = useState(""); // 🆕 state for search

  const handleReadData = () => {
    axios
      .get("http://localhost:5000/read/student")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("error student", err);
      });
  };
  
  useEffect(() => {
    handleReadData();
  }, []);

  

  ///filtering search

 const filteredData = Data.filter((student) =>
  student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  student.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
  student.status.toLowerCase().includes(searchTerm.toLowerCase())
);

  const handledelete=(id)=>{
    axios.delete(`http://localhost:5000/delete/student/${id}`).then((res)=>{
      alert("success delete")
      handleReadData()
    })
  }



   

  return (
    <>
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FaUserGraduate className="text-blue-600" /> Students
            </h1>

            <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute top-3 left-4 text-gray-400 text-sm" />
                <input type="text" placeholder="Search students" by name=", phone, grade or status.." className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition" value={searchTerm} onChange={(e)=> setSearchTerm (e.target.value)} />
              </div>

              {/* Add New Button */}
             <Link to="/addstudent"> <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow hover:bg-blue-700 transition">
                <FaPlus /> Add New Student
              </button></Link>

              {/* Admin Profile */}
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-inner cursor-pointer hover:bg-gray-200 transition">
                <FaUserCircle className="text-2xl text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Admin</span>
              </div>
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <FaUserGraduate className="text-blue-600" /> Students List
            </h2>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="p-3 rounded-tl-2xl"></th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Date of Birth</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Grade</th>
                    <th className="p-3">Admission Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 rounded-tr-2xl text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                   {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.gender}</td>
                      <td>{new Date(item.date_of_birth).toLocaleDateString()}</td>
                      <td className="p-3 text-black font-medium">{item.phone}</td>
                      <td className="p-3 text-black font-medium">{item.grade}</td>
                      <td>{new Date(item.admission_date).toLocaleDateString()}</td>
                      <td className="p-3 text-black font-medium">{item.status}</td>
                      <td className="p-3 text-center">
                        <div className="flex justify-center gap-4 text-xl">
                         <Link to= "/update"> <button className="text-blue-600 hover:text-blue-800">
                            <FaEdit />
                          </button></Link>
                          <button onClick={() => handledelete(item._id)} className="text-red-600 hover:text-red-800">
                          <FaTrash />
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))
                ): (
                  <tr>
                    <td colSpan="9" className="text-center text-gray-500 py-6">
                      No students found.
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
