import { Link } from "react-router-dom"
import { FaUserGraduate, FaChalkboardTeacher, FaUserCheck, FaBook } from "react-icons/fa";

function Sidebar(){
    return <>
    <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-center mb-10 tracking-wide">🏫Tawakal School</h2>
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
            <p>© 2025 Tawakal School</p>
          </div>
        </div>
        </div>
    
    </>
}
export default Sidebar