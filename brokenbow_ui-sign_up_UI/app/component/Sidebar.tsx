"use client";
import { usePathname } from "next/navigation";
import { CalendarDays, MessageCircle, User } from "lucide-react";

const sidebarItems = [
  { label: "Reservations", icon: <CalendarDays size={20} className="mr-2" /> },
  { label: "Messages", icon: <MessageCircle size={20} className="mr-2" /> },
  { label: "Profile", icon: <User size={20} className="mr-2" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white p-6 border-r min-h-screen">
      <ul className="space-y-6 text-lg">
        {sidebarItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center ${
              pathname.includes(item.label.toLowerCase()) ? "text-blue-600 font-semibold" : ""
            }`}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
        <li className="text-red-500 cursor-pointer">Logout</li>
      </ul>
    </aside>
  );
}