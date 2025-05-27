// components/CabinCard.tsx
import Image from "next/image";
import {
    Bath,
    BedDouble,
    Heart,
    Star,
    Moon,
    Waves,
    Users,
} from "lucide-react";

interface ImageUrls{

    fileUrl: string,
    defaultImage: boolean,
    imageDesc:string,
    category: string,
    uploadedAt: Date
}
interface CabinCardProps {
    // propertyId : number,
    propertyName:string,
    bedroomCount: number,
    bathroomCount: number,
    basePricePerDay: number,
    // swimmingPool: boolean,
    imageUrls: ImageUrls[]
}


export default function CabinCard({propertyName,bedroomCount, bathroomCount, basePricePerDay}: CabinCardProps) {
    return (
        <div className="rounded-2xl w-full overflow-hidden shadow border bg-white max-w-sm mx-auto p-3">
            {/* Image Section */}
            <div className="relative w-full h-60">
                <Image
                    src="/card.png" // Replace with actual image path
                    alt="Cabin"
                    fill
                    className="object-cover rounded-2xl"
                />
                <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-md">
                    <Heart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                {/* Title & Pricing */}
                <div className="flex justify-between items-start">
                    <div className="font-semibold text-lg">{propertyName}</div>
                    <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                            ${basePricePerDay} <span className="text-sm text-gray-400">/night</span>
                        </div>
                        <div className="text-sm text-gray-500">
                            ${basePricePerDay * 2} for 2 days
                            <br />
                            <span className="text-green-600 text-xs">
                All taxes and fee included
              </span>
                        </div>
                    </div>
                </div>

                {/* Amenities */}
                <div className="flex gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                        <BedDouble className="w-4 h-4" />
                        {bedroomCount}
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {bathroomCount}
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        4
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm text-gray-800">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <Star key={i} size={16} fill="#FBBF24" stroke="none" />
                        ))}
                    <span className="ml-2 font-medium">4.4</span>
                    <span className="text-gray-500">(66)</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-sm mt-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-1">
                        <Waves size={14} />
                        Pool
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-1">
                        <Moon size={14} />
                        Night
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full flex items-center gap-1">
            <BedDouble size={14} />
            Bedrooms
          </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">4+</span>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                    <button className="flex-1 border border-gray-300 text-blue-600 py-2 rounded-lg hover:bg-gray-100">
                        Contact host
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Book now
                    </button>
                </div>
            </div>
        </div>
    );
}
