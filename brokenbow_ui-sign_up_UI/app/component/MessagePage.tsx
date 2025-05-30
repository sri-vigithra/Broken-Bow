"use client";
import React, { useState } from "react";

const messages = [
  {
    name: "Rajeev choudhary",
    text: "Lorem Ipsum is simply dummy text...",
    date: "12 May",
    unread: false,
    selected: false,
  },
  {
    name: "Rajeev choudhary",
    text: "Lorem Ipsum is simply dummy text...",
    date: "12 May",
    unread: true,
    selected: true,
  },
  {
    name: "Rajeev choudhary",
    text: "Lorem Ipsum is simply dummy text...",
    date: "12 May",
    unread: false,
    selected: false,
  },
  {
    name: "Rajeev choudhary",
    text: "Lorem Ipsum is simply dummy text...",
    date: "12 May",
    unread: false,
    selected: false,
  },
];

export default function MessagesPage() {
  const [selectedIdx, setSelectedIdx] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-6">Messages</h2>
        <div className="divide-y">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-center px-2 py-4 cursor-pointer transition ${
                selectedIdx === idx
                  ? "bg-gray-100 font-semibold"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setSelectedIdx(idx)}
            >
              <img
                src="/profile.png"
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover mr-4"
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">
                  {msg.name}
                </div>
                <div
                  className={`truncate text-sm ${
                    selectedIdx === idx ? "font-semibold" : "text-gray-500"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
              <div className="flex flex-col items-end ml-4">
                <span className="text-xs text-gray-400">{msg.date}</span>
                {selectedIdx === idx && (
                  <span className="mt-2 w-5 h-5 flex items-center justify-center bg-blue-600 text-white text-xs rounded-full">
                    1
                  </span>
                )}
              </div>
              <span className="ml-2 text-gray-400">{">"}</span>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full py-2 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50">
          View all messages
        </button>
      </div>
    </div>
  );
}