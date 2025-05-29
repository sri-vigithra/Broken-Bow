"use client";
import { useState, useRef } from "react";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    
    if (value && index < 4) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
   
    alert("OTP resent!");
  };

  const handleCancel = () => {
   
  };

  const handleVerify = () => {
    
    alert(`Verifying OTP: ${otp.join("")}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[430px] max-w-full">
        <h2 className="text-2xl font-semibold mb-2 text-center">Verify Email</h2>
        <p className="text-center text-gray-600 mb-6">
          Verification email has been sent to <br />
          <span className="font-medium text-black">sample@sample.com</span>
        </p>
        <div className="flex justify-center gap-3 mb-3">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={el => { inputs.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-14 text-2xl text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
            />
          ))}
        </div>
        <div className="flex justify-center mb-6">
          <button
            className="border px-4 py-1 rounded text-gray-700 hover:bg-gray-100 text-sm"
            onClick={handleResend}
          >
            Resend OTP
          </button>
        </div>
        <hr className="mb-6" />
        <div className="flex gap-4">
          <button
            className="flex-1 py-3 rounded border border-gray-400 text-gray-700 font-semibold bg-white hover:bg-gray-50"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}