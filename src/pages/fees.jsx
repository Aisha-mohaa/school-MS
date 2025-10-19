import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import {
  FaMoneyBillWave,
  FaSearch,
  FaUserCircle,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

function Fees() {
   const [Data, setData] = useState([]);
   const [searchTerm, setSearchTerm] = useState(""); // 🆕 state for search
  
    const handleReadData = () => {
      axios.get("http://localhost:5000/read/fees").then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error("error fees", err);
        });
    };
  
    
    useEffect(() => {
      handleReadData();
    }, []);

  const filteredData = Data.filter((fees) =>
  fees.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  fees.ClassName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  fees.Amount.toLowerCase().includes(searchTerm.toLowerCase()) ||
  fees.status.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <>
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FaMoneyBillWave className="text-green-600" /> Fees Management
            </h1>

            <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute top-3 left-4 text-gray-400 text-sm" />
                <input type="text" placeholder="Search fees..." className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition" value={searchTerm} onChange={(e)=> setSearchTerm (e.target.value)} />
              </div>

              {/* Add New Button */}
             <Link to="/addfees"> <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full shadow hover:bg-green-700 transition">
                <FaPlus /> Add Payment
              </button></Link>

              
            </div>
          </div>

          {/* Fees Table */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <FaMoneyBillWave className="text-green-600" /> Fees Records
            </h2>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="p-3 rounded-tl-2xl">#</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Date Paid</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 rounded-tr-2xl text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                <tr key={index}  className="hover:bg-gray-50 transition">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.ClassName}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3 text-black font-medium">${item.Amount}</td>
                  <td className="p-3 text-black font-medium">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="p-3 text-black font-medium">{item.status}</td>
                  <td className="p-3 text-center">
                    <div className="flex justify-center gap-4 text-xl">
                      <button className="text-green-600 hover:text-green-800">
                        <FaEdit/>
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
                 ))
                ): (
                  <tr>
                    <td colSpan="9" className="text-center text-gray-500 py-6">
                      No feess found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fees;
