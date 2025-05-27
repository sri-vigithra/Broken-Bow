import {Eye, EyeOff} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {signInWithEmailAndPassword, signInWithPopup} from "@firebase/auth";
import {auth, googleAuthProvider} from "@/app/config/Firebase";

export default function SignIn(){
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(formData.email === '' || formData.password === '') {
            alert("Please enter email and password");
            return;
        }
        // const payload = new FormData();
        // payload.append("email", email);
        // payload.append("password", password);

        try {
            const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = response.user;
            console.log(user);
            router.push("/");
        }catch (error : any) {
            alert("Error: " + error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try{
            const result = await signInWithPopup(auth, googleAuthProvider);
            const idToken = await result.user.getIdToken();

            const res = await fetch("http://localhost:8081/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken }),
            });
            const data = await res.json();
            console.log("Backend response:", data);
            router.push("/");
        } catch (err){
                alert("login error " + err);
        }



    }
    return (
        <>
            <h2 className="text-2xl font-semibold text-center mb-8">
                Welcome! Create your account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email ID
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="john@email.com"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        onChange={handleChange}
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
                            name="password"
                            value={formData.password}
                            placeholder="********"
                            className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring focus:ring-blue-200"
                            onChange={handleChange}
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
                    Sign In
                </button>
            </form>

            {/* Social Logins */}
            <div className="my-6 space-y-3">
                <button className="w-full border border-gray-300 rounded py-2 px-4 flex items-center justify-center gap-2" onClick={handleGoogleLogin}>
                    <Image src="/google.png" alt="Google" width={18} height={18} />
                    Continue with Google
                </button>
                <button className="w-full border border-gray-300 rounded py-2 px-4 flex items-center justify-center gap-2">
                    <Image src="/apple.png" alt="Apple" width={18} height={18} />
                    Continue with Apple
                </button>
            </div>
        </>

    )
}