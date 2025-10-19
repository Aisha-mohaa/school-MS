import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addfees() {
    const [name, setname]= useState("")
    const [ClassName, setClassName]= useState("")
    const [phone, setphone]= useState("")
    const [Amount, setAmount]= useState("")
    const [date, setdate]= useState("")
    const [status, setstatus]= useState("")
    const navigate = useNavigate()

    const handlepost=(e)=>{
      e.preventDefault()
       axios.post("http://localhost:5000/create/fees", {
        "name":name,
        "ClassName":ClassName,
        "phone":phone,
        "Amount":Amount,
        "date":date,                                                                                    
        "status":status,

      }).then(()=>{
        alert("Success rigestor")
        navigate("/fees")
      })
    }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handlepost} className="bg-blue-400 w-full max-w-lg p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Add New fees
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input value={name} onChange={(e) => setname(e.target.value)} type="text"placeholder="Enter fees name"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">ClassName</label>
            <input value={ClassName} onChange={(e) => setClassName(e.target.value)} type="text"placeholder="Enter Classname"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div> 

          


          {/* phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">phone</label>
            <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" placeholder="Enter phone number"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>
          {/* Amount */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Amout</label>
            <input value={Amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder="Enter Amount $" className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>
        

          {/*  Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2"> Date</label>
            <input value={date} onChange={(e) => setdate(e.target.value)} type="date" className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Status</label>
            <select value={status} onChange={(e) => setstatus(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg">
              <option value="Present">choose status</option>
              <option value="Present">paid</option>
              <option value="Present">Unpaid</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button type="submit" className="bg-purple-500 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold">
              Add fees
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addfees;
