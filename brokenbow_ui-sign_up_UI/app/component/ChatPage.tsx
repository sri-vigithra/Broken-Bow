"use client";
import React, { useState } from "react";

const initialMessages = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "12:34 pm",
    fromMe: false,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "12:34 pm",
    fromMe: true,
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([
      ...messages,
      { text: input, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), fromMe: true },
    ]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl flex flex-col" style={{ height: 500 }}>
      
        <div className="flex items-center px-4 py-3 border-b">
          <button className="mr-2 text-gray-500 hover:text-gray-700">&larr; Back</button>
          <img src="/profile.png" alt="avatar" className="w-8 h-8 rounded-full object-cover mr-2" />
          <span className="font-medium text-gray-900">Rajeev choudhary</span>
        </div>
       
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.fromMe ? "items-end" : "items-start"}`}>
              <div className={`px-4 py-2 rounded-lg text-sm ${msg.fromMe ? "bg-gray-100" : "bg-gray-100"}`}>
                {msg.text}
              </div>
              <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
            </div>
          ))}
        </div>
       
        <div className="p-3  flex">
          <input
            type="text"
            className="flex-1 border rounded-l-lg px-3 py-2 outline-none text-sm"
            placeholder="Message"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-r-lg font-medium hover:bg-blue-700 text-sm"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}