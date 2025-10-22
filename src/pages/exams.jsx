import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import {
  FaClipboardList,
  FaSearch,
  FaUserCircle,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Exam() {
  const [Data, setData] = useState([]); // array of exams

  const handleReadData = () => {
    axios
      .get("http://localhost:5000/read/Exam") // backend route-kaaga
      .then((res) => {
        setData(res.data); // response data
      })
      .catch((err) => {
        console.error("Error fetching exams", err);
      });
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaClipboardList className="text-purple-600" /> Exams
          </h1>

          <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute top-3 left-4 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search exams..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            {/* Add New Button */}
            <Link to="/addExams">
              <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-3 rounded-full shadow hover:bg-purple-700 transition">
                <FaPlus /> Add New Exam
              </button>
            </Link>

            {/* Admin Profile */}
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-inner cursor-pointer hover:bg-gray-200 transition">
              <FaUserCircle className="text-2xl text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">Admin</span>
            </div>
          </div>
        </div>

        {/* Exam Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <FaClipboardList className="text-purple-600" /> Exam Records
          </h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-purple-700 text-white">
                <th className="p-3 rounded-tl-2xl">#</th>
                <th className="p-3">Exam Title</th>
                <th className="p-3">subject</th>
                <th className="p-3">Class</th>
                <th className="p-3">Date</th>
                <th className="p-3">Total Marks</th>
                <th className="p-3">Status</th>
                <th className="p-3 rounded-tr-2xl text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((exam, index) => (
                <tr
                  key={exam._id || index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 text-black font-medium">{exam.examTitle}</td>
                  <td className="p-3 text-black font-medium">{exam.subject}</td>
                  <td className="p-3 text-black font-medium">{exam.classese}</td>
                  <td className="p-3 text-black font-medium">
                    <input
                      type="date"
                      value={exam.date}
                      onChange={() => {}}
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="p-3 text-black font-medium">{exam.TotalMark}</td>
                  <td className="p-3 text-black font-medium">
                    <select value={exam.status} onChange={() => {}} className="border rounded p-1">
                      <option value="">Choose</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-4 text-xl">
                     <Link to="/updateExams"><button className="text-purple-600 hover:text-purple-800">
                        <FaEdit />
                      </button></Link>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Exam;
