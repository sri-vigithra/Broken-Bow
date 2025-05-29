"use client";
import Image from "next/image";
import { CalendarDays, MessageCircle, User, LogOut, MapPin, Edit2, CheckCircle2 } from "lucide-react";

export default function ProfileImagePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      
      <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="brokenbow" className="h-8" />
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

      <main className="flex max-w-7xl mx-auto pt-12">
        
        <aside className="w-72 bg-white rounded-xl shadow p-0 mr-8 flex flex-col">
          <nav className="flex-1">
            <ul className="py-4">
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-2 font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md"
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
                  className="flex items-center px-6 py-2 text-blue-700 bg-blue-50 rounded-md font-medium"
                >
                  <User size={20} className="mr-2" />
                  Profile
                </a>
              </li>
            </ul>
          </nav>
          <button className="flex items-center space-x-2 text-red-500 hover:underline px-6 pb-4 mt-auto">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </aside>

        
        <section className="flex-1">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-8">
        
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">Rajeev choudhary</span>
                  <span className="flex items-center text-blue-600 text-xs font-semibold ml-2">
                    <CheckCircle2 size={16} className="mr-1" /> Verified
                  </span>
                  <span className="text-gray-500 text-sm ml-2">rajeev@sample.com</span>
                  <span className="text-gray-500 text-sm ml-2">| +1 9898 89998</span>
                </div>
                <div className="text-gray-500 text-xs mt-2">
                  Bio – Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </div>
              </div>
              <button className="border px-5 py-2 rounded hover:bg-gray-100 flex items-center gap-1 text-sm font-medium">
                Edit <Edit2 size={16} />
              </button>
            </div>
            <hr />
          
            <div className="flex items-center gap-8">
              <div>
                <MapPin size={40} className="text-gray-500" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Address</div>
                <div className="text-gray-500 text-sm mt-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </div>
              </div>
              <button className="border px-5 py-2 rounded hover:bg-gray-100 flex items-center gap-1 text-sm font-medium">
                Edit <Edit2 size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}