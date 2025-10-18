import { Link } from "react-router-dom"
import { FaUserGraduate, FaChalkboardTeacher, FaUserCheck, FaBook, FaMoneyBill, FaMoneyCheck, FaMoneyBillAlt, FaLayerGroup } from "react-icons/fa";

function Sidebar(){
    return <>
    <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b text-xl  first-line: from-blue-900 to-blue-700 text-white p-6 flex flex-col justify-between shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-center mb-10 tracking-wide">🏫Tawakal School</h2>
            <nav className="space-y-3">
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/">
                <FaBook className="text-2xl" /> Dashboard</Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/students">
                <FaUserGraduate className="text-2xl" /> Students
              </Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/teachers">
                <FaChalkboardTeacher className="text-2xl" /> Teachers
              </Link>
            

              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/atendence">
                <FaUserCheck className="text-2xl" /> Attendance
              </Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/Classes">
                <FaUserGraduate className="text-2xl" /> Classes
              </Link>
              <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/fees">
                <FaMoneyBill className="text-2xl" /> Fees
              </Link>
              <Link
                className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"
                to="/exams"
              >
                <FaBook className="text-2xl" /> Exams
              </Link>
                <Link className="flex items-center gap-3 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 ease-in-out"to="/reports">
               <FaMoneyCheck className="text-2xl" /> Reports
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