"use client";
import { useState } from "react";
import Image from "../component/Image";

export default function ImageTestPage() {
  const [open, setOpen] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {open && <Image onClose={() => setOpen(false)} />}
      {!open && (
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded"
          onClick={() => setOpen(true)}
        >
          Open Image Modal
        </button>
      )}
    </main>
  );
}