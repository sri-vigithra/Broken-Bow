import Image from 'next/image';


export default function Insurence(){
    return(
        <div className="bg-blue-50 py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/travel-insurance-logo.png"
                        alt="Travel Insurance"
                        width={260}
                        height={80}
                        className="object-contain"
                    />
                </div>

                {/* Right: Text + Button (stacked vertically) */}
                <div className="text-center md:text-left">
                    <p className="text-lg text-gray-900 mb-4 max-w-xl">
                        Easy to compare and buy Travel Insurance from top rated insurers at the guaranteed lowest price.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700">
                        Click to compare
                    </button>
                </div>
            </div>
        </div>
                    );
}