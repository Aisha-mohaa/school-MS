import { FaUserGraduate, FaChalkboardTeacher, FaUserCheck, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-2xl font-extrabold text-center mb-10 tracking-wide">🏫 SchoolSys</h2>
            <nav className="space-y-3">
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/">
                <FaBook className="text-lg" /> Dashboard</Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/students">
                <FaUserGraduate className="text-lg" /> Students
              </Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/teachers">
                <FaChalkboardTeacher className="text-lg" /> Teachers
              </Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/attendance">
                <FaUserCheck className="text-lg" /> Attendance
              </Link>
              <Link
                className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"
                to="/exams"
              >
                <FaBook className="text-lg" /> Exams
              </Link>
            </nav>
          </div>

          <div className="text-center text-sm opacity-70 border-t border-blue-500 pt-4">
            <p>© 2025 SchoolSys</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-extrabold mb-10 text-gray-800 tracking-wide">
            📊 Dashboard Overview
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaUserGraduate className="text-4xl text-blue-700 mb-3" />
              <p className="text-gray-700 font-medium">Students</p>
              <h2 className="text-3xl font-bold text-blue-900 mt-1">250</h2>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaChalkboardTeacher className="text-4xl text-green-700 mb-3" />
              <p className="text-gray-700 font-medium">Teachers</p>
              <h2 className="text-3xl font-bold text-green-900 mt-1">25</h2>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaUserCheck className="text-4xl text-yellow-700 mb-3" />
              <p className="text-gray-700 font-medium">Attendance</p>
              <h2 className="text-3xl font-bold text-yellow-900 mt-1">92%</h2>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-pink-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaBook className="text-4xl text-pink-700 mb-3" />
              <p className="text-gray-700 font-medium">Subjects</p>
              <h2 className="text-3xl font-bold text-pink-900 mt-1">12</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
