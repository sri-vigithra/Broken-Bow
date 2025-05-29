"use client";
import { useState } from "react";
import AddEmailModal from "@/app/component/AddEmailModel";

export default function AddEmailPage() {
  const [showModal, setShowModal] = useState(true);

  const handleNext = (email: string) => {
    alert(`Email updated to: ${email}`);
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <AddEmailModal
          onClose={() => setShowModal(false)}
          onNext={handleNext}
          defaultEmail="rajeev@sample.com"
        />
      )}
      {!showModal && (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded"
            onClick={() => setShowModal(true)}
          >
            Open Add Email Modal
          </button>
        </div>
      )}
    </div>
  );
}