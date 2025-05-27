"use client";
import { CalendarDays, MessageCircle, User, LogOut, MapPin, Edit2, CheckCircle2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="brokenbow" className="h-8" />
          <span className="font-bold text-lg text-blue-900">brokenbow</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
            <span>Win 2 Night Stay At Choctaw Landing</span>
            <button className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">Apply</button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">Cabins</a>
            <a href="#" className="hover:text-blue-700">Travel Guide</a>
            <a href="#" className="hover:text-blue-700">Real Estate</a>
          </nav>
          <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm font-medium">List your cabin</button>
          <User className="text-gray-500" size={24} />
          <span className="font-medium text-gray-700">Rajeev</span>
        </div>
      </header>

      <main className="flex max-w-7xl mx-auto mt-8">
        
        <aside className="w-72 bg-white rounded-xl shadow p-0 mr-8 flex flex-col">
          <nav className="flex-1">
            <ul className="py-4">
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-2 font-medium text-blue-700 bg-blue-50 rounded-md"
                >
                  <CalendarDays size={20} className="mr-2" />
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Messages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md font-medium"
                >
                  <User size={20} className="mr-2" />
                  Profile
                </a>
              </li>
            </ul>
          </nav>
          <button className="flex items-center space-x-2 text-red-500 hover:underline px-6 pb-4">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </aside>

        
        <section className="flex-1">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col">
            
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              
              <div className="flex flex-col items-center md:items-start w-32">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-3xl font-bold text-blue-900 mb-2 relative">
                  RC
                  <button className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow hover:bg-gray-100">
                    <Edit2 size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                  <span className="font-semibold text-lg">Rajeev choudhary</span>
                  <span className="text-gray-500 text-sm md:ml-2">rajeev@sample.com</span>
                  <span className="flex items-center text-blue-600 text-xs font-semibold ml-2">
                    <CheckCircle2 size={16} className="mr-1" /> Verified
                  </span>
                  <span className="text-gray-500 text-sm md:ml-2">| +1 9898 89998</span>
                </div>
                <div className="text-gray-500 text-xs mt-2">
                  Bio – Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </div>
                <button className="mt-2 flex items-center text-gray-600 hover:text-blue-700 text-xs border px-3 py-1 rounded-md">
                  <Edit2 size={16} className="mr-1" />
                  Edit
                </button>
              </div>
            </div>
            {/* Address Section */}
            <div className="border-t mt-8 pt-6 flex items-start">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mr-4">
                <MapPin size={32} className="text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Address</div>
                <div className="text-gray-500 text-sm mt-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </div>
              </div>
              <button className="ml-4 flex items-center text-gray-600 hover:text-blue-700 text-xs border px-3 py-1 rounded-md">
                <Edit2 size={16} className="mr-1" />
                Edit
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}