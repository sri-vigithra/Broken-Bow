"use client";
import { FiChevronRight, FiX } from "react-icons/fi";
import { useState } from "react";

export default function MobileSidebar({ onClose }: { onClose?: () => void }) {
  const [hasNewMessage] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="w-[320px] bg-white rounded shadow-lg p-0 relative">
        
        <div className="flex items-center justify-between border-b px-4 py-3">
          <img src="/logo.svg" alt="brokenbow" className="h-7" />
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX size={22} />
          </button>
        </div>
       
        <nav className="mt-2">
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Profile
                <FiChevronRight />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Reservations
                <FiChevronRight />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 relative"
              >
                Messages
                <span className="flex items-center">
                  {hasNewMessage && (
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full mr-2">
                      1
                    </span>
                  )}
                  <FiChevronRight />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-4 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Favourite
                <FiChevronRight />
              </a>
            </li>
          </ul>
        </nav>
       
        <div className="px-6 py-4">
          <button className="text-red-500 text-sm hover:underline">Logout</button>
        </div>
      </div>
    </div>
  );
}