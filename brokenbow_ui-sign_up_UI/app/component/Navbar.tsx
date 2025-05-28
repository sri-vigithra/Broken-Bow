"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { onAuthStateChanged, signOut, User } from "firebase/auth"; // Import User type
import { auth } from "@/app/config/Firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Typed state as User or null
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/cabins", label: "Cabins" },
    { href: "/travel-guide", label: "Travel Guide" },
    { href: "/real-estate", label: "Real Estate" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handelSigout = async () => {
    try {
      await signOut(auth);
      router.push("/signup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-white px-6 py-4 shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/brokenbow.png"
            alt="BrokenBow Logo"
            width={146}
            height={33}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-[#03365B]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden md:flex space-x-4">
          <button className="border px-4 py-1 rounded hover:text-white">
            List your cabin
          </button>
          {!user ? (
            <Link
              href="/signup"
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Sign in
            </Link>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              onClick={handelSigout}
            >
              Sign out
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white mt-2 px-6 pb-4 space-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-1">
              {l.label}
            </Link>
          ))}
          <button className="w-full text-left border px-4 py-1 rounded">
            List your cabin
          </button>
          <button className="w-full text-left bg-[#03365B] text-white px-4 py-1 rounded">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}