// components/SignUpPage.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {useRouter} from "next/navigation";
import {signInWithCustomToken} from "@firebase/auth";
import {auth}  from "@/app/config/Firebase";
import SignIn from "@/app/component/SignIn";
import SignUp from "@/app/component/SignUp";

export default function SignUpPage() {
    const [isSignIn,setIsSignIn] = useState(true);
    // const [showPassword, setShowPassword] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");
    // const [phone, setPhone] = useState("");
    // const router = useRouter();
    //
    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //
    //     const payload = new FormData();
    //     payload.append("username", username);
    //     payload.append("email", email);
    //     payload.append("password", password);
    //     payload.append("phone", phone);
    //
    //     try {
    //         const response = await fetch("http://localhost:8081/api/users/create", {
    //             method: "POST",
    //             body: payload,
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error("Signup failed");
    //         }
    //
    //         const data = await response.json();
    //         const customToken = data.token;
    //
    //         await signInWithCustomToken(auth, customToken);
    //         router.push("/");
    //     } catch (error: any) {
    //         alert("Error: " + error.message);
    //     }
    // };
    return (
        <div className="flex min-h-screen">
            {/* Left image */}
            <div className="hidden lg:block w-1/2 relative">
                <Image
                    src="/signup-image.png" // Place your image inside public/
                    alt="Signup"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>


                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                    <div className="max-w-md w-full">
                        {isSignIn ? (
                                <div>
                                    <SignIn />
                                    <p className="text-sm text-center text-gray-600">
                                        Don't have an account?
                                        <button className="w-full hover:bg-[#002f3c] border hover:text-white text-gray-700 font-medium py-2 px-4 rounded m-3" onClick={() => setIsSignIn(false)}>
                                            Sign Up
                                        </button>
                                    </p>
                                </div>

                        ) : (
                            <div>
                                <SignUp />
                                <p className="text-sm my-6 text-center text-gray-600">
                                    Already have an account?
                                    <button className="w-full hover:bg-[#002f3c] border hover:text-white text-gray-700 font-medium py-2 px-4 rounded m-3" onClick={() => setIsSignIn(true)}>
                                        Sign In
                                    </button>
                                </p>
                            </div>
                           )}

                    </div>
                </div>
        </div>
    );
}
