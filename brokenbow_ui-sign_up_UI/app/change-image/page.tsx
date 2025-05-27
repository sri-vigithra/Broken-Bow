"use client";
import { useState } from "react";
import ChangeImageModal from "../component/ChangeImageModal";

export default function ChangeImagePage() {
  const [open, setOpen] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {open && <ChangeImageModal onClose={() => setOpen(false)} />}
      {!open && (
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded"
          onClick={() => setOpen(true)}
        >
          Open Change Image Modal
        </button>
      )}
    </main>
  );
}