import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import { FaSearch, FaTrash } from "react-icons/fa";
import axios from "axios";

function AttendanceRecord() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Attendance Records
  const fetchRecords = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/attendanceRecord");
      setRecords(res.data);
    } catch (err) {
      console.error("Error fetching records:", err.message);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // Delete record
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/attendanceRecord/${id}`);
      alert("Deleted successfully");
      fetchRecords(); // Refresh table
    } catch (err) {
      console.error("Error deleting record:", err.message);
    }
  };

  // Filter by search
  const filteredRecords = records.filter((r) =>
    r.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">📋 Attendance Records</h1>
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

        {/* Attendance Record Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Student Name</th>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRecords.map((record, index) => (
                <tr key={record._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{record.studentName}</td>
                  <td className="px-6 py-4">{record.className}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-white text-sm font-semibold bg-red-500">
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{record.date}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(record._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRecords.length === 0 && (
            <div className="p-6 text-center text-gray-500">No records found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AttendanceRecord;
