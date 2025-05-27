
import Image from 'next/image';

export default function EmailSubscription() {
    return(
        <div className="relative w-full h-[350px]">
            {/* Background Image */}
            <Image
                src="/cabin-bg.png"
                alt="Cabin Background"
                fill
                className="object-cover object-center -z-10"
                priority
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-3xl w-full text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                        SIGN UP FOR CABIN SPECIALS, LOCAL COUPONS & TOURISM INSIGHTS
                    </h2>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="yourmail@mail.com"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}