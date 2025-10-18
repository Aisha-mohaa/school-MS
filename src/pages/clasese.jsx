import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch attendance data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/read/atendence");
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching attendance:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update attendance status
  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/update/atendence/${id}`, {
        status,
      });
      fetchData(); // refresh data after update
    } catch (err) {
      console.error("Error updating status:", err.message);
    }
  };

  // Filter students by search
  const filteredStudents = students.filter((s) =>
    s.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">📝 Attendance</h1>
          <div className="flex items-center w-full md:w-1/3 bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
            <FaSearch className="text-gray-400 px-3" />
            <input
              type="text"
              placeholder="Search student..."
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student, index) => (
                <tr key={student._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{student.studentName}</td>
                  <td className="px-6 py-4">{student.class}</td>
                  <td className="px-6 py-4">{student.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                        student.status === "Present"
                          ? "bg-green-500"
                          : student.status === "Absent"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => handleStatusChange(student._id, "Present")}
                      className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <FaCheck />
                    </button>
                    <button
                      onClick={() => handleStatusChange(student._id, "Absent")}
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <div className="p-6 text-center text-gray-500">No students found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
