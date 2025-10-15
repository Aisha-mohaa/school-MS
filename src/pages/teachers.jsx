import Sidebar from "../components/sidebar";
import { FaUserGraduate, FaSearch, FaUserCircle, FaPlus,  FaEdit, FaTrash} from "react-icons/fa";

function Teachers(){
    return <>
    <div className="flex min-h-screen bg-gray-100 font-sans">

     <Sidebar/>
             <div className="flex-1 p-8">
               <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md mb-8">
                 <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                   <FaUserGraduate className="text-green-600" /> Teachers</h1>
                 <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
                   {/* Search Bar */}
                   <div className="relative w-full md:w-96">
                     <FaSearch className="absolute top-3 left-4 text-gray-400 text-sm" />
                     <input
                          type="text" placeholder="Search teacher..." className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
                   </div>
     
                   {/* Add New Button */}
                   <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow hover:bg-blue-700 transition">
                     <FaPlus /> Add New Teachers </button>
     
                   {/* Admin Profile */}
                   <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-inner cursor-pointer hover:bg-gray-200 transition">
                     <FaUserCircle className="text-2xl text-blue-600" />
                     <span className="text-sm font-semibold text-gray-700">
                       Admin 
                     </span>
                   </div>
                 </div>
               </div>

               <div  className="bg-white p-6 rounded-2xl shadow-md">
                <h1 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
                 <FaUserGraduate className="text-blue-500"/> Teachers List
                </h1>
               
               <div className="bg-white p-6 rounded-2xl shadow-md">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-blue-700 text-white">
                            <th className="p-3 "></th>
                            <th className="p-3 ">Name</th>
                            <th className="p-3 ">Gender</th>
                            <th className="p-3 ">Phone</th>
                            <th className="p-3 ">Subject</th>
                            <th className="p-3 ">salary</th>
                            <th className="p-3 ">Status</th>
                            <th className="p-3 ">option</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="hover:bg-gray-50 transition text-xl">
                            <td className="p-3">1</td>
                             <td className="p-3">Hasan</td>
                            <td className="p-3">
                                <select  name="gender">
                                    <option value="choose gender">Choose gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                            <td className="p-3">6122222</td>
                            
                            <td className="p-3 ">Arabic</td>
                            <td className="p-3">$200</td>
                           <td className="p-3 text-black font-medium">
                      <select className="border rounded p-1">
                      <option value="">Choose</option>
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Late">Late</option>
                    </select>
                  </td>   
                            <td className="p-3 text-center">
                            <div className="flex justify-center gap-4 text-xl">
                            <button className="text-blue-600 hover:text-blue-800">
                            <FaEdit />
                           </button>
                           <button className="text-red-600 hover:text-red-800">
                           <FaTrash />
                           </button>
                            </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
               </div>

               </div>
               </div>

               </div>
               

    </>
}

export default Teachers