import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const [name, setname]= useState("")
    const [gender, setgender]= useState("")
    const [date_of_birth, setdate_of_birth]= useState("")
    const [phone, setphone]= useState("")
    const [grade, setgrade]= useState("")
    const [admission_date, setadmission_date]= useState("")
    const [status, setstatus]= useState("")
    const navigate = useNavigate()

    const handlepost=(e)=>{
      e.preventDefault()
       axios.post("http://localhost:5000/create/student", {
        "name":name,
        "gender":gender,
        "date_of_birth":date_of_birth,
        "phone":phone,
        "grade":grade,
        "admission_date":admission_date,
        "status":status,

      }).then(()=>{
        alert("Success rigestor")
        navigate("/students")
      })
    }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handlepost} className="bg-blue-400 w-full max-w-lg p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Add New Student
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input value={name} onChange={(e) => setname(e.target.value)} type="text"placeholder="Enter student name"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
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

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
            <input value={date_of_birth} onChange={(e) => setdate_of_birth(e.target.value)} type="date"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">phone</label>
            <input value={phone} onChange={(e) => setphone(e.target.value)} type="text" placeholder="Enter phone number"className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* grade */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">grade</label>
            <input value={grade} onChange={(e) => setgrade(e.target.value)} type="text" placeholder="Enter grade" className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
          </div>

          {/* Admission Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Admission Date</label>
            <input value={admission_date} onChange={(e) => setadmission_date(e.target.value)} type="date" className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"/>
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
              Add Student
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
