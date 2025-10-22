import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddExams() {
  const [examTitle, setexamTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [classese, setclassese] = useState("");
  const [date, setDate] = useState("");
  const [TotalMark, setTotalMark] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();

    // Validate fields
    if (!examTitle || !subject || !classese || !date || !TotalMark || !status) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:5000/create/Exam", {
        examTitle,
        subject,
        classese,
        date,
        TotalMark,
        status,
      })
      .then(() => {
        alert("Exam added successfully!");
        navigate("/exams"); // frontend exams page
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding exam");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlePost}
        className="bg-blue-400 w-full max-w-lg p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Add New Exam
        </h2>

        {/* Exam Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Exam Title
          </label>
          <input
            value={examTitle}
            onChange={(e) => setexamTitle(e.target.value)}
            type="text"
            placeholder="Enter exam title"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Subject
          </label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            placeholder="Enter subject"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Class */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Class
          </label>
          <input
            value={classese}
            onChange={(e) => setclassese(e.target.value)}
            type="text"
            placeholder="Enter class"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Date</label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Total Marks */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Total Marks
          </label>
          <input
            value={TotalMark}
            onChange={(e) => setTotalMark(e.target.value)}
            type="number"
            placeholder="Enter total marks"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          >
            <option value="">Choose status</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-purple-500 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold"
          >
            Add Exam
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExams;
