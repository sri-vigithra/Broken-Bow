"use client";
import { useState } from "react";
import { CalendarDays, MessageCircle, User, LogOut, Download} from "lucide-react";



const reservations = [
  {
    name: "Royal Retreat",
    address: "Twisted Vine Ct, Broken Bow",
    bookingId: "9123 0123 9123 91",
    bookingDate: "17 May 2025",
    checkIn: "24 May",
    checkOut: "28 May",
    guests: 3,
    paymentStatus: "Partial Paid",
    invoiceUrl: "#",
  },
  {
    name: "Royal Retreat",
    address: "Twisted Vine Ct, Broken Bow",
    bookingId: "9123 0123 9123 91",
    bookingDate: "17 May 2025",
    checkIn: "24 May",
    checkOut: "28 May",
    guests: 3,
    paymentStatus: "Paid",
    invoiceUrl: "#",
  },
  {
    name: "Royal Retreat",
    address: "Twisted Vine Ct, Broken Bow",
    bookingId: "9123 0123 9123 91",
    bookingDate: "17 May 2025",
    checkIn: "24 May",
    checkOut: "28 May",
    guests: 3,
    paymentStatus: "Paid", 
    invoiceUrl: "#",
  },
];

const tabs = [
  { label: "All", count: 23 },
  { label: "Pending", count: 11 },
  { label: "Booked", count: 5 },
  { label: "Cancelled", count: 4 },
  { label: "Declined", count: 2 },
];

export default function ReservationsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">

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
          <h2 className="text-2xl font-semibold mb-6">Reservations</h2>
         
          <div className="flex space-x-2 mb-6">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  activeTab === idx
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
         
          <div className="space-y-6">
            {reservations.map((res, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0"
              >
                <div>
                  <div className="font-semibold text-lg">{res.name}</div>
                  <div className="text-gray-500 text-sm">{res.address}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    Booking ID: <span className="font-medium text-gray-700">{res.bookingId}</span>
                    <span className="ml-4">Booking date: {res.bookingDate}</span>
                  </div>
                  <div className="flex space-x-8 mt-4">
                    <div>
                      <div className="text-xs text-gray-500">Check in</div>
                      <div className="font-medium">{res.checkIn}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Check out</div>
                      <div className="font-medium">{res.checkOut}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Details</div>
                      <div className="font-medium">{res.guests} Guest{res.guests > 1 ? "s" : ""}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Payment status</div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            res.paymentStatus === "Paid"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {res.paymentStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    href={res.invoiceUrl}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 text-sm font-medium"
                  >
                    <Download size={16} className="mr-2" />
                    Download Invoice
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  ); 
}