import { FaUserGraduate, FaChalkboardTeacher, FaUserCheck, FaMoneyCheckAlt } from "react-icons/fa";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import Sidebar from "../components/sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [feesCount, setFeesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch Students Count
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/student");
        setStudentCount(res.data.length);
      } catch (err) {
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  // Fetch Teachers Count
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/teacher");
        setTeacherCount(res.data.length);
      } catch (err) {
        console.error("Error fetching teachers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  // Fetch Attendance Count
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/attendance");
        setAttendanceCount(res.data.length);
      } catch (err) {
        console.error("Error fetching attendance:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  // Fetch Fees Count
  useEffect(() => {
    const fetchFees = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/fees");
        setFeesCount(res.data.length);
      } catch (err) {
        console.error("Error fetching fees:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFees();
  }, []);

  // Chart Data
  const attendanceData = [
    { month: "Jan", attendance: 85 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 92 },
    { month: "Apr", attendance: 95 },
    { month: "May", attendance: 91 },
    { month: "Jun", attendance: 89 },
  ];

  const genderData = [
    { name: "Male", value: 140 },
    { name: "Female", value: 110 },
  ];

  const COLORS = ["#2563EB", "#EC4899"];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-extrabold mb-10 text-gray-800 tracking-wide">
          📊 Dashboard Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaUserGraduate className="text-4xl text-blue-700 mb-3" />
            <p className="text-gray-700 font-medium">Students</p>
            <h2 className="text-3xl font-bold text-blue-900 mt-1">
              {loading ? "..." : studentCount}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaChalkboardTeacher className="text-4xl text-green-700 mb-3" />
            <p className="text-gray-700 font-medium">Teachers</p>
            <h2 className="text-3xl font-bold text-green-900 mt-1">
              {loading ? "..." : teacherCount}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaUserCheck className="text-4xl text-yellow-700 mb-3" />
            <p className="text-gray-700 font-medium">Attendance</p>
            <h2 className="text-3xl font-bold text-yellow-900 mt-1">
              {loading ? "..." : attendanceCount}
            </h2>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <FaMoneyCheckAlt className="text-4xl text-pink-700 mb-3" />
            <p className="text-gray-700 font-medium">Fees</p>
            <h2 className="text-3xl font-bold text-pink-900 mt-1">
              {loading ? "..." : feesCount}
            </h2>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Monthly Attendance
            </h2>
            <LineChart width={400} height={250} data={attendanceData}>
              <Line type="monotone" dataKey="attendance" stroke="#2563EB" strokeWidth={3} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Students by Gender
            </h2>
            <PieChart width={400} height={250}>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
