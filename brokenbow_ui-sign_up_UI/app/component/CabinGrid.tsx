
'use client';
import CabinCard from "./CabinCard";
import {useEffect, useState} from "react";

const dummyData = Array(6).fill({
    propertyName: "Happily Even After Cabin",
    basePricePerDay: 599,
    bathroomCount: 3,
    bedroomCount : 2,
    imageUrls: ["/card.png"],
});

export default function CabinGrid() {
    const [properties, setProperties] = useState<any[]>([]);
    
    const getProperty = async () => {
        try {
            const response = await fetch("http://localhost:8081/api/properties/all", {
                method: "GET",
            });
            // const response = await fetch("http://localhost:8081/api/properties/all", {
            if (!response.ok) {
                setProperties(dummyData);
                throw new Error("Properties fetch failed");
            }
            // {
            //     "success": true,
            //     "message": "Properties fetched",
            //     "data": [
            //     {
            //         "propertyName": "updated Seaside villa",
            //         "propertyDescription": "A luxurious beachfront villa with stunning ocean views.",
            //         "propertyAddress": "123 Ocean Drive, Miami, FL",
            //         "independentHouse": true,
            //         "bedroomCount": 4,
            //         "bathroomCount": 3,
            //         "basePricePerDay": 150,
            //         "maxPricePerDay": 0,
            //         "swimmingPool": false,
            //         "parking": true,
            //         "maxOccupancy": 8,
            //         "petsAllowed": false,
            //         "smoking": false,
            //         "airconditioned": true,
            //         "firePit": true,
            //         "exteriorSecurityCamera": true,
            //         "latitude": 25.76,
            //         "longitude": -80.19,
            //         "amenities": [],
            //         "imageUrls": [],
            //         "zipCode": null
            //     },
            //     {
            //         "propertyName": "Seaside Villa",
            //         "propertyDescription": "A luxurious beachfront villa with stunning ocean views.",
            //         "propertyAddress": "123 Ocean Drive, Miami, FL",
            //         "independentHouse": true,
            //         "bedroomCount": 4,
            //         "bathroomCount": 3,
            //         "basePricePerDay": 150,
            //         "maxPricePerDay": 0,
            //         "swimmingPool": false,
            //         "parking": true,
            //         "maxOccupancy": 8,
            //         "petsAllowed": false,
            //         "smoking": false,
            //         "airconditioned": true,
            //         "firePit": true,
            //         "exteriorSecurityCamera": true,
            //         "latitude": 25.76,
            //         "longitude": -80.19,
            //         "amenities": [],
            //         "imageUrls": [],
            //         "zipCode": null
            //     }
            // ],
            //     "errorCode": null,
            //     "timestamp": "2025-05-18T13:06:16.8045685"
            // }
              const data = await response.json();
        return data; 
    } catch (err) {
        console.error("Error fetching properties:", err);
        return { success: false, errorCode: "FETCH_ERROR", data: dummyData }; 
    }
        
    }
    useEffect(() => {
    getProperty().then(resp => {
        if (resp?.success && resp.errorCode === null) {
            setProperties(resp.data);
        } else {
            setProperties(resp.data); 
        }
    });
}, []);

    return (
        <section className="px-4 py-12 max-w-7xl mx-auto">
            <div className="text-center mb-10 space-y-1">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Broken Bow, Hochatown & Beavers Bend
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                    Broken Bow - Oklahoma's Premier Cabin Destination
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((cabin, i) => (
                    <CabinCard key={i} {...cabin} />
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <button className="border border-gray-300 px-6 py-2 rounded-md text-sm hover:bg-gray-100 transition">
                    View all
                </button>
            </div>
        </section>
    );
}
