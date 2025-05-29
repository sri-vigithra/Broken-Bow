import { useState } from "react";

interface AddEmailModalProps {
  onClose: () => void;
  onNext: (email: string) => void;
  defaultEmail?: string;
}

export default function AddEmailModal({ onClose, onNext, defaultEmail = "" }: AddEmailModalProps) {
  const [email, setEmail] = useState(defaultEmail);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[400px] max-w-full">
        <h2 className="text-2xl font-semibold mb-4">Adding Email</h2>
        <hr className="mb-6" />
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Update Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <div className="flex gap-4 mt-4">
          <button
            className="flex-1 py-3 rounded border border-gray-400 text-gray-700 font-semibold bg-white hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
            onClick={() => onNext(email)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}