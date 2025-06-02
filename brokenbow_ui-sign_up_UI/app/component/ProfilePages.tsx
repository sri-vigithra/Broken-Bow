"use client";
import { FiMail, FiEdit2, FiMapPin, FiLogOut, FiMessageSquare, FiCalendar } from "react-icons/fi";

export default function ProfilePages() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
     
      <header className="bg-white border-b px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="brokenbow" className="h-7" />
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium ml-8">
          <a href="#">Home</a>
          <a href="#">Cabins</a>
          <a href="#">Travel Guide</a>
          <a href="#">Real Estate</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="border px-4 py-1 rounded text-gray-700 hover:bg-gray-100 text-sm">
            List your cabin
          </button>
          <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <FiMail className="text-gray-500" />
          </span>
          <span className="font-medium">Rajeev</span>
        </div>
      </header>

      <main className="flex flex-1 pt-10 max-w-6xl mx-auto w-full">
    
        <aside className="w-64 bg-white rounded-xl shadow p-0 mr-8 flex flex-col">
          <nav className="flex-1">
            <ul className="py-4">
              <li>
                <a href="#" className="flex items-center px-6 py-2 font-medium text-blue-700 bg-blue-50 rounded-md">
                  <FiCalendar className="mr-2" /> Reservations
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium">
                  <FiMessageSquare className="mr-2" /> Messages
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium">
                  <FiMail className="mr-2" /> Profile
                </a>
              </li>
            </ul>
          </nav>
          <button className="flex items-center space-x-2 text-red-500 hover:underline px-6 pb-4">
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </aside>

        
        <section className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <img
                src="profile.png"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-lg">Rajeev choudhary</span>
                  <span className="text-gray-500 text-sm">rajeev@sample.com</span>
                  <span className="flex items-center text-red-500 text-xs font-semibold">
                    <svg width="14" height="14" fill="none"><circle cx="7" cy="7" r="7" fill="#F87171"/></svg>
                    Not Verified
                  </span>
                  <span className="text-gray-500 text-sm">| +1 9898 89998</span>
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  Bio – Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </div>
              </div>
              <button className="border px-4 py-1 rounded text-gray-700 hover:bg-gray-100 text-sm flex items-center gap-1">
                <FiEdit2 size={16} /> Edit
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-sm text-gray-700">
                Verify your email address <span className="font-medium">"rajeev@sample.com"</span>
              </span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 text-sm">
                Verify Email
              </button>
              <button className="border px-4 py-2 rounded text-gray-700 hover:bg-gray-100 text-sm">
                Use Another email
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-8 flex items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
              <FiMapPin size={32} className="text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Address</div>
              <div className="text-gray-500 text-sm mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
              </div>
            </div>
            <button className="border px-4 py-1 rounded text-gray-700 hover:bg-gray-100 text-sm flex items-center gap-1">
              <FiEdit2 size={16} /> Edit
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}