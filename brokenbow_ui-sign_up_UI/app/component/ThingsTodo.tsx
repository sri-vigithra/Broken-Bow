'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const topActivities = [
    {
        title: 'Boating Rentals',
        subtitle: 'Take the trip',
        img: '/boating.png',
    },
    {
        title: 'Mountain Hiking',
        subtitle: 'Conquer the peaks',
        img: '/hiking.png',
    },
    {
        title: 'Fishing Trips',
        subtitle: 'Catch your own dinner',
        img: '/fishing.png',
    }
];

export default function ThingsToDoSection() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i === 0 ? topActivities.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === topActivities.length - 1 ? 0 : i + 1));

    return (
        <section className="px-6 py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">
                        Top things to do in Broken Bow, Oklahoma
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={prev} className="p-2 border rounded hover:bg-gray-100">
                            <ChevronLeft />
                        </button>
                        <button onClick={next} className="p-2 border rounded hover:bg-gray-100">
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative overflow-hidden mb-10">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {topActivities.map((item, i) => (
                            <div key={i} className="min-w-full md:min-w-[33.3333%] px-2">
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover bg-black"
                                    />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="text-sm">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Static Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                            src="/attractions.png"
                            alt="Attractions & Activities"
                            fill
                            className="object-cover bg-black"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">Attractions & Activities</h3>
                            <p className="text-sm">Know more</p>
                        </div>
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                            src="/trails.png"
                            alt="Hiking Trails"
                            fill
                            className="object-cover bg-black"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">Hiking Trails</h3>
                            <p className="text-sm">Know more</p>
                        </div>
                    </div>
                </div>

                {/* Full Width CTA Card */}
                <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                        src="/cabin-1.png"
                        alt="Cabins for Sale"
                        fill
                        className="object-cover bg-black"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 md:px-12">
                        <div className="text-white max-w-md">
                            <h3 className="text-2xl font-bold mb-2">Cabins For Sale</h3>
                           <p className="mb-4 text-sm">
  Whether you&apos;re looking for a forever home, investment property,
  land to build on or wanting to sell, we can help you every step of the way.
</p>

                            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                                Search Real Estate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
