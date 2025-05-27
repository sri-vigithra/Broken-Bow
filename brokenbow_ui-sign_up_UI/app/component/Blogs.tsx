// app/components/Blogs.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Insurence from "@/app/component/Insurence";
import EmailSubscription from "@/app/component/EmailSubscription";

export default function Blogs() {
    return (
        <>
            {/* Latest Blogs Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Latest blogs</h2>
                        <p className="text-sm text-gray-500">Stay updated with new adventurous trips</p>
                    </div>
                    <button className="mt-4 md:mt-0 border border-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100">
                        Explore more
                    </button>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <Image
                                src={`/blog-${item}.png`}
                                alt={`Blog ${item}`}
                                width={400}
                                height={300}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 text-sm text-gray-700">
                                Known for its breath taking natural beauty....{' '}
                                <Link href="#" className="text-blue-600 hover:underline">Read more</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Travel Insurance Banner */}
            <Insurence/>

            {/* App Download Section (Updated Layout) */}
            <div className="bg-white px-4 py-12 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Text & Badges */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">
                            App for Area Travel Guide, Top Things to do, and exclusive cabin deals
                        </h2>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <Image src="/app-store-badge.png" alt="App Store" width={140} height={45} />
                            <Image src="/google-play-badge.png" alt="Google Play" width={140} height={45} />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <Image src="/app-preview.png" alt="App Preview" width={250} height={500} className="rounded-md" />
                    </div>
                </div>
            </div>

            {/* Email Subscription Banner */}
          <EmailSubscription/>
        </>
    );
}
