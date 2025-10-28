import {
  FaChartLine,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaMoneyBill,
} from "react-icons/fa";
import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Report() {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [feesCount, setFeesCount] = useState(0);
  const [attendanceData, setAttendanceData] = useState([]);
  const [feesData, setFeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Students Count
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/student");
        setStudentCount(res.data.length);
      } catch (err) {
        console.error("Error fetching students count:", err);
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
        console.error("Error fetching teachers count:", err);
      }
    };
    fetchTeachers();
  }, []);

  // Fetch Attendance Data (real)
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/attendance");
        const data = res.data;

        // total attendance count
        setAttendanceCount(data.length);

        // group by date (for chart)
        const grouped = data.reduce((acc, curr) => {
          const date = curr.date ? curr.date.slice(0, 10) : "Unknown";
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        // convert to array
        const chartData = Object.entries(grouped).map(([date, count]) => ({
          date,
          attendance: count,
        }));

        setAttendanceData(chartData);
      } catch (err) {
        console.error("Error fetching attendance:", err);
      }
    };
    fetchAttendance();
  }, []);

  // Fetch Fees Data (real)
  useEffect(() => {
    const fetchFees = async () => {
      try {
        const res = await axios.get("http://localhost:5000/read/fees");
        const data = res.data;

        // total fees
        setFeesCount(data.length);

        // group by month
        const grouped = data.reduce((acc, curr) => {
          const month =
            curr.month ||
            (curr.date
              ? new Date(curr.date).toLocaleString("default", { month: "short" })
              : "Unknown");
          acc[month] = (acc[month] || 0) + (curr.amount || 0);
          return acc;
        }, {});

        const chartData = Object.entries(grouped).map(([month, amount]) => ({
          month,
          fees: amount,
        }));

        setFeesData(chartData);
      } catch (err) {
        console.error("Error fetching fees:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFees();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Reports Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Students */}
          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaUserGraduate className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-xl font-semibold text-gray-800">
                {loading ? "..." : studentCount}
              </p>
            </div>
          </div>

          {/* Teachers */}
          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaChalkboardTeacher className="text-3xl text-green-600" />
            <div>
              <p className="text-gray-500 text-sm">Total Teachers</p>
              <p className="text-xl font-semibold text-gray-800">
                {loading ? "..." : teacherCount}
              </p>
            </div>
          </div>

          {/* Attendance */}
          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaChartLine className="text-3xl text-purple-600" />
            <div>
              <p className="text-gray-500 text-sm">Total Attendance</p>
              <p className="text-xl font-semibold text-gray-800">
                {loading ? "..." : attendanceCount}
              </p>
            </div>
          </div>

          {/* Fees */}
          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaMoneyBill className="text-3xl text-yellow-600" />
            <div>
              <p className="text-gray-500 text-sm">Fees Collected</p>
              <p className="text-xl font-semibold text-gray-800">
                {loading ? "..." : feesCount}
              </p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Attendance Chart */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-gray-800 font-semibold mb-4">Attendance Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="attendance"
                  stroke="#6B46C1"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Fees Chart */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-gray-800 font-semibold mb-4">Fees Collection</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={feesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="fees" fill="#ECC94B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
