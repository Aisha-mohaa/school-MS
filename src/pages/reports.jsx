import { FaChartLine, FaUserGraduate, FaChalkboardTeacher, FaMoneyBill } from "react-icons/fa";
import Sidebar from "../components/sidebar";

function Report() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">📊 Reports Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaUserGraduate className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-xl font-semibold text-gray-800">350</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaChalkboardTeacher className="text-3xl text-green-600" />
            <div>
              <p className="text-gray-500 text-sm">Total Teachers</p>
              <p className="text-xl font-semibold text-gray-800">25</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaChartLine className="text-3xl text-purple-600" />
            <div>
              <p className="text-gray-500 text-sm">Average Attendance</p>
              <p className="text-xl font-semibold text-gray-800">92%</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md flex items-center gap-4">
            <FaMoneyBill className="text-3xl text-yellow-600" />
            <div>
              <p className="text-gray-500 text-sm">Fees Collected</p>
              <p className="text-xl font-semibold text-gray-800">$12,500</p>
            </div>
          </div>
        </div>

        {/* Charts / Tables Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Attendance Chart */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-gray-800 font-semibold mb-4">Attendance Overview</h2>
            <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400">
              {/* Placeholder: integrate Recharts or Chart.js here */}
              Chart goes here
            </div>
          </div>

          {/* Fees Collection Chart */}
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-gray-800 font-semibold mb-4">Fees Collection</h2>
            <div className="h-64 bg-gray-100 flex items-center justify-center text-gray-400">
              {/* Placeholder: integrate chart */}
              Chart goes here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
