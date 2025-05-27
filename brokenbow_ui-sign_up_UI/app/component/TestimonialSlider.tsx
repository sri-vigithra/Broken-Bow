'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Lisa',
        location: 'New York',
        content:
            'Beautiful cabin! We had so much fun, the pool really was the cherry on top. The kids did not want to leave. The hosts were super responsive and made everything so easy. Would most def recommend to everyone!!',
    },
    {
        name: 'John',
        location: 'Dallas',
        content:
            'Amazing stay! The property was clean and cozy. Our family enjoyed every bit of it.',
    },
    {
        name: 'Maria',
        location: 'Los Angeles',
        content:
            'One of the best vacation rentals we’ve ever booked. Great views, and the service was top-notch.',
    }
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);

    const prev = () =>
        setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () =>
        setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    return (
        <section className="bg-[#f0f7ff] py-10 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold">What people say about us</h2>
                    <div className="flex gap-2">
                        <button onClick={prev} className="p-2 border rounded hover:bg-gray-100">
                            <ChevronLeft />
                        </button>
                        <button onClick={next} className="p-2 border rounded hover:bg-gray-100">
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden h-[180px] sm:h-[200px]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {testimonials.map((item, i) => (
                            <div key={i} className="min-w-full px-2">
                                <Quote className="w-8 h-8 text-gray-400 mb-3" />
                                <p className="text-gray-800 text-lg font-medium leading-relaxed">
                                    {item.content}
                                </p>
                                <p className="mt-4 font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
