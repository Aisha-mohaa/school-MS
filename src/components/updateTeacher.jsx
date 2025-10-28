import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateTeacher() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleReadSingle = () => {
    axios
      .get(`http://localhost:5000/read/teacher/${id}`)
      .then((res) => {
        console.log("DATA:", res.data);
        const data = res.data;
        setName(data.name || "");
        setGender(data.gender || "");
        setPhone(data.phone || "");
        setSubject(data.subject || "");
        setSalary(data.salary || "");
        setStatus(data.status || "");
      })
      .catch((err) => console.error("Error fetching teacher:", err));
  };

  useEffect(() => {
    handleReadSingle();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/update/teacher/${id}`, {
        name,
        gender,
        phone,
        subject,
        salary,
        status,
      });
      alert("Teacher updated successfully!");
      navigate("/teachers");
    } catch (err) {
      console.error("Error updating teacher:", err);
      alert("Failed to update teacher!");
    }
  };

  if (!name && !gender && !phone) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="bg-blue-400 w-full max-w-lg p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Update Teacher
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter teacher name"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Enter phone number"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Enter subject"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Salary</label>
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            placeholder="Enter salary amount"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          >
            <option value="">Choose status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-purple-500 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold"
          >
            Update Teacher
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTeacher;
