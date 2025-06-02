import { User, Heart, Search, BedDouble, Star } from "lucide-react";

const cabins = [
  {
    name: "Happily Even After Cabin",
    price: "$599",
    per: "night",
    guests: 4,
    beds: 4,
    baths: 4,
    rating: 4.4,
    reviews: 66,
    image: "images.png",
    tags: ["Pool", "SF", "Night", "Bedrooms: 4"],
  },
   {
    name: "Happily Even After Cabin",
    price: "$599",
    per: "night",
    guests: 4,
    beds: 4,
    baths: 4,
    rating: 4.4,
    reviews: 66,
    image: "images.png",
    tags: ["Pool", "SF", "Night", "Bedrooms: 4"],
  },
    {
    name: "Happily Even After Cabin",
    price: "$599",
    per: "night",
    guests: 4,
    beds: 4,
    baths: 4,
    rating: 4.4,
    reviews: 66,
    image: "images.png",
    tags: ["Pool", "SF", "Night", "Bedrooms: 4"],
  },
    {
    name: "Happily Even After Cabin",
    price: "$599",
    per: "night",
    guests: 4,
    beds: 4,
    baths: 4,
    rating: 4.4,
    reviews: 66,
    image: "images.png",
    tags: ["Pool", "SF", "Night", "Bedrooms: 4"],
  },
    {
    name: "Happily Even After Cabin",
    price: "$599",
    per: "night",
    guests: 4,
    beds: 4,
    baths: 4,
    rating: 4.4,
    reviews: 66,
    image: "images.png",
    tags: ["Pool", "SF", "Night", "Bedrooms: 4"],
  },
    {
    name: "Happily Even After Cabin",
    price: "$599",
    per: "night",
    guests: 4,
    beds: 4,
    baths: 4,
    rating: 4.4,
    reviews: 66,
    image: "images.png",
    tags: ["Pool", "SF", "Night", "Bedrooms: 4"],
  },
];

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="brokenbow" className="h-8" />
          <span className="font-bold text-lg text-blue-900">brokenbow</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
            <span>Win 2 Night Stay At Choctaw Landing</span>
            <button className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs">Apply</button>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">Cabins</a>
            <a href="#" className="hover:text-blue-700">Travel Guide</a>
            <a href="#" className="hover:text-blue-700">Real Estate</a>
          </nav>
          <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm font-medium">List your cabin</button>
          <Heart className="text-gray-500" size={22} />
          <User className="text-gray-500" size={24} />
          <span className="font-medium text-gray-700">Rajeev</span>
        </div>
      </header>

    
      <div className="bg-white shadow px-8 py-4 flex flex-wrap items-center gap-4 mt-4 rounded-xl max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm">Check in</span>
          <span className="font-medium">24 May</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 text-sm">Check out</span>
          <span className="font-medium">28 May</span>
        </div>
        <div className="flex items-center space-x-2">
          <BedDouble size={18} className="text-gray-500" />
          <span className="font-medium">99</span>
        </div>
        <button className="ml-auto flex items-center bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">
          <Search size={18} className="mr-2" />
          Search
        </button>
      </div>

     
      <div className="max-w-6xl mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Search Results</h2>
          <div className="text-gray-500 text-sm">Sort by: <span className="font-medium text-gray-700">Default</span></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cabins.map((cabin, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden flex flex-col">
              <img src={cabin.image} alt={cabin.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base">{cabin.name}</h3>
                  <span className="font-bold text-blue-700">{cabin.price}
                    <span className="font-normal text-gray-500 text-xs">/night</span>
                  </span>
                </div>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  {cabin.rating} <span className="ml-1">({cabin.reviews})</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 text-xs">
                  {cabin.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex mt-4 gap-2">
                  <button className="flex-1 border border-blue-600 text-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50">Contact host</button>
                  <button className="flex-1 bg-blue-600 text-white rounded px-3 py-1 text-sm hover:bg-blue-700">Book now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}