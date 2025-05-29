"use client";
import { useState } from "react";

const countries = ["United Staed", "Canada", "Mexico"];
const states = ["California", "Texas", "New York"];

export default function AddressPage() {
  const [country, setCountry] = useState(countries[0]);
  const [state, setState] = useState(states[0]);
  const [zip, setZip] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  const handleCancel = () => {
    
  };

  const handleSave = () => {
    
    alert("Address saved!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[500px] max-w-full">
        <h2 className="text-2xl font-semibold mb-4">Address</h2>
        <hr className="mb-6" />
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-xs font-medium mb-1">Country</label>
            <select
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              {countries.map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium mb-1">State</label>
            <select
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={state}
              onChange={e => setState(e.target.value)}
            >
              {states.map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium mb-1">Zip Code</label>
            <input
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Street address"
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-xs font-medium mb-1">Address Line 1</label>
          <input
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Address line 1"
            value={line1}
            onChange={e => setLine1(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="block text-xs font-medium mb-1">Address Line 2</label>
          <input
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Address line 2"
            value={line2}
            onChange={e => setLine2(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="flex-1 py-3 rounded border border-gray-400 text-gray-700 font-semibold bg-white hover:bg-gray-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}