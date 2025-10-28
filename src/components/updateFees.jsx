import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateFees() {
  const [name, setName] = useState("");
  const [ClassName, setClassName] = useState("");
  const [phone, setPhone] = useState("");
  const [Amount, setAmount] = useState("");
  const [date, setdate] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleReadSingle = () => {
    axios
      .get(`http://localhost:5000/readSingle/fees/${id}`)
      .then((res) => {
        console.log("DATA:", res.data);
        const data = res.data;
        setName(data.name || "");
        setClassName(data.ClassName || "");
        setPhone(data.phone || "");
        setAmount(data.Amount || "");
        setdate(data.date || "");
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
      await axios.put(`http://localhost:5000/update/Fees/${id}`, {
        name,
        ClassName,
        phone,
        Amount,
        date,
        status,
      });
      alert("Teacher updated successfully!");
      navigate("/fees");
    } catch (err) {
      console.error("Error updating teacher:", err);
      alert("Failed to update teacher!");
    }
  };

  if (!name && !ClassName && !phone) {
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

        {/* ClassName */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">ClassName</label>
          <select
            value={ClassName}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          >
            <option value="">Select ClassName</option>
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

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount</label>
          <input
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="Enter Amount"
            className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
        </div>

        {/* date */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">date</label>
          <input
            value={date}
            onChange={(e) => setdate(e.target.value)}
            type="text"
            placeholder="Enter date amount"
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
            <option value="paid">paid</option>
            <option value="unpaid">unpaid</option>
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

export default UpdateFees;
