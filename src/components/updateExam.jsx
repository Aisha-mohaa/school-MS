import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateExams() {
  const { id } = useParams(); // exam id
  const navigate = useNavigate();

  const [examTitle, setExamTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [classese, setClassese] = useState("");
  const [date, setDate] = useState("");
  const [TotalMark, setTotalMark] = useState("");
  const [status, setStatus] = useState("");

  // Fetch exam data by id
  useEffect(() => {
    axios
      .get(`http://localhost:5000/readSingle/Exam/${id}`)
      .then((res) => {
        const data = res.data;
        setExamTitle(data.examTitle);
        setSubject(data.subject);
        setClassese(data.classese);
        setDate(data.date.slice(0, 10)); // YYYY-MM-DD
        setTotalMark(data.TotalMark);
        setStatus(data.status);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/update/Exam/${id}`, {
        examTitle,
        subject,
        classese,
        date,
        TotalMark,
        status,
      })
      .then(() => {
        alert("Exam updated successfully!");
        navigate("/exams");
      })
      .catch((err) => {
        console.error(err);
        alert("Error updating exam");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="bg-blue-400 w-full max-w-lg p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Update Exam
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Exam Title
          </label>
          <input
            type="text"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Class
          </label>
          <input
            type="text"
            value={classese}
            onChange={(e) => setClassese(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Total Marks
          </label>
          <input
            type="number"
            value={TotalMark}
            onChange={(e) => setTotalMark(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

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

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-purple-500 text-white px-8 py-3 rounded-xl shadow hover:bg-purple-600 transition text-lg font-semibold"
          >
            Update Exam
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateExams;
