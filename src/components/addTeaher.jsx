import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTeacher() {
    const [name, setname]= useState("")
    const [gender, setgender]= useState("")
    const [phone, setphone]= useState("")
    const [subject, setsubject]= useState("")
    const [salary, setsalary]= useState("")
    const [status, setstatus]= useState("")
    const navigate = useNavigate()

    const handlepost=(e)=>{
      e.preventDefault()
       axios.post("http://localhost:5000/create/teacher", {
        "name":name,
        "gender":gender,
        "phone":phone,
        "subject":subject,
        "salary":salary,
        "status":status,

      }).then(()=>{
        alert("Success rigestor")
        navigate("/teachers")
      })
    }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handlepost} className="bg-blue-400 w-full max-w-lg p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Add New Teacher
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input value={name} onChange={(e) => setname(e.target.value)} type="text"placeholder="Enter teacher name"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* gender */}
          <div className="mb-4">
            <label  className="block text-gray-700 font-semibold mb-2">Gender</label>
            <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          

          {/* phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">phone</label>
            <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" placeholder="Enter phone number"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* subject */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">subject</label>
            <input value={subject} onChange={(e) => setsubject(e.target.value)} type="text" placeholder="Enter subject" className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* salary Date */}
          <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Salary</label>
         <div className="relative"><span className="absolute left-3 top-3 text-gray-500 text-lg">$</span>
         <input value={salary} onChange={(e) => setsalary(e.target.value)} type="number" className="w-full h-12 pl-8 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg" placeholder="Enter amount"/>
        </div>
        </div>


          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Status</label>
            <select value={status} onChange={(e) => setstatus(e.target.value)} className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg">
              <option value="status">Choose status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button type="submit" className="bg-purple-500 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold">
              Add teacher
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTeacher;
