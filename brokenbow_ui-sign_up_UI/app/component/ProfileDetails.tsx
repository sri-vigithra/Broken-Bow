"use client";
import React, { useState } from "react";

export default function ProfileDetails() {
  const [form, setForm] = useState({
    name: "Rajeev Choudhary",
    email: "rajeev@sample.com",
    phone: "+1 9898 89998",
    bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    alert("Saved!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <form
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={3}
              className="w-full border rounded-lg px-4 py-2 text-sm outline-none resize-none"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="w-1/2 mr-2 py-2 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 ml-2 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}