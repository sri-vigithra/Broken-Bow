import {Eye, EyeOff} from "lucide-react";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {signInWithCustomToken} from "@firebase/auth";
import {auth} from "@/app/config/Firebase";
// import { allCountries } from 'country-telephone-data';


const countryCodes = [
    { code: '+1', label: '🇺🇸 USA (+1)' },
    { code: '+91', label: '🇮🇳 India (+91)' },
    { code: '+44', label: '🇬🇧 UK (+44)' },
    { code: '+81', label: '🇯🇵 Japan (+81)' },
    { code: '+61', label: '🇦🇺 Australia (+61)' },
    { code: '+49', label: '🇩🇪 Germany (+49)' },
];

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    // const [countryCode, setCountryCode] = useState("+1");
    const router = useRouter();
    const selectRef = useRef<HTMLSelectElement>(null);

    // useEffect(() => {
    //     let instance: Choices | null = null;
    //
    //     if (selectRef.current) {
    //         instance = new Choices(selectRef.current, {
    //             searchEnabled: true,
    //             itemSelectText: '',
    //             shouldSort: true,
    //         });
    //     }
    //
    //     return () => {
    //         // Cleanup on unmount
    //         instance?.destroy();
    //     };
    // }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append("username", username);
        payload.append("email", email);
        payload.append("password", password);
        payload.append("phone", phone);

        try {
            const response = await fetch("http://localhost:8081/api/users/create", {
                method: "POST",
                body: payload,
            });

            if (!response.ok) {
                throw new Error("Signup failed");
            }

            const res = await response.json();
            // {
            //     "success": true,
            //     "message": "User Created",
            //     "data": {
            //     "token": "eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImNsYWltcyI6eyJyb2xlIjoiVVNFUiJ9LCJleHAiOjE3NDc1NTQzNTYsImlhdCI6MTc0NzU1MDc1NiwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstZmJzdmNAdGVzdC01OTcyYi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWZic3ZjQHRlc3QtNTk3MmIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJ1aWQiOiJlV1JhbXRYOFJXZGdqR1o0YzRLaXdpWk1XS0MzIn0.pUW-JiHt2jfDpg8aqCv7Q6a0YncgwhWzzA_maA4fY2odlRBZ5Zc6e4n83IyI7A0ZSUUCYKds4DTRx2fyQc-3gOErVrrbBo9iDNuna8yhzanV2kIdzax1QAkBh72w4twcGVNjNwELxoaKwRTslG339LHsNCqU1tn3T-LtHoCt0WSMimnVBHvfasiyAZ6KE8k6q16sEieuJhCQvBRDgbLlgfTatHO7F6GBFXaZEN0KI3lRlEBT_wju4WmemQt9xElmqH0hSEU6gQIgX6qlJOBTLFzSSVyi9olhC9GM3hyJiPHRhNR0rIaAHFSWvIQW6a2MNIp-0TbD07BG0n80cdCsEQ",
            //         "uid": "eWRamtX8RWdgjGZ4c4KiwiZMWKC3",
            //         "email": "sabariravissl20@gmail.com",
            //         "role": "USER",
            //         "emailVerified": false,
            //         "message": null
            // },
            //     "errorCode": null,
            //     "timestamp": "2025-05-18T12:15:58.492623413"
            // }
            if(res.errorCode === null && res.success){
                const data = res.data;
                const customToken = data.token;

                await signInWithCustomToken(auth, customToken);
                router.push("/");
            }
        } catch (error: any) {
            alert("Error: " + error.message);
        }
    };
    return (
        <>

                    <h2 className="text-2xl font-semibold text-center mb-8">
                        Welcome! Create your account
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                Phone Number
                            </label>
                            <div className="flex border border-gray-300 rounded overflow-hidden focus-within:ring focus-within:ring-blue-200">
                                {/*<select*/}
                                {/*    value={countryCode}*/}
                                {/*    onChange={(e) => setCountryCode(e.target.value)}*/}
                                {/*    className="bg-white pl-3 pr-6 py-2 focus:outline-none"*/}
                                {/*    ref={selectRef}*/}
                                {/*>*/}
                                {/*    {allCountries.map((opt,i) => (*/}
                                {/*        <option key={i} value={opt.dialCode}>{opt.dialCode}</option>*/}
                                {/*    ))}*/}
                                {/*</select>*/}
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="645 324 32343"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    className="flex-1 px-4 py-2 focus:outline-none"
                                />
                            </div>

                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                                Email ID
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="john@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring focus:ring-blue-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#003549] hover:bg-[#002f3c] text-white font-medium py-2 px-4 rounded"
                        >
                            Sign Up
                        </button>
                    </form>




        </>
    )
}