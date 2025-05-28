"use client";
import { useRef, useState } from "react";

export default function Image({ onClose }: { onClose: () => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  
  const initials = "RC";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImage(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px] border-2 border-blue-500">
        <div className="mb-4">
          <span className="text-xl font-semibold px-2 py-1 rounded">Change Image</span>
        </div>
       
        <div className="flex flex-col items-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 mb-4 flex items-center justify-center">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-7xl font-bold text-[#03365B]">{initials}</span>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              className="px-4 py-2 bg-gray-100 rounded border border-gray-300 text-gray-700 font-medium"
              onClick={() => fileInputRef.current?.click()}
            >
              Replace image
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button
              className="px-4 py-2 bg-gray-100 rounded border border-gray-300 text-gray-700 font-medium"
              onClick={handleRemoveImage}
            >
              Remove Image
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            className="flex-1 py-2 rounded border border-gray-400 text-gray-700 font-semibold bg-white"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="flex-1 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}