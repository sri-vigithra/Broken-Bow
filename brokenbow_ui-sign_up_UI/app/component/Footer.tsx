// app/components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-12 text-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left Section */}
                    <div>
                        <Image src="/brokenbow.png" alt="brokenbow logo" width={150} height={50} />
                        <p className="mt-4 text-sm">
                            Experience the best of Broken Bow and Hochatown, Oklahoma with brokenbow.com – the one-stop marketplace for cabin rentals, things to do, real estate, and more.
                        </p>
                        <p className="mt-4 text-sm">
                            Address – 5375 N US Hwy 259 suite 2, Broken Bow, OK 74728, USA
                        </p>
                        <p className="mt-2 text-sm">Call – (580)204-4899</p>
                        <div className="flex gap-4 mt-4">
                            <Link href="#" aria-label="Facebook"><Facebook className="w-5 h-5 hover:text-black" /></Link>
                            <Link href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-black" /></Link>
                            <Link href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-black" /></Link>
                            <Link href="#" aria-label="Instagram"><Instagram className="w-5 h-5 hover:text-black" /></Link>
                        </div>
                    </div>

                    {/* Home Links */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">Home</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Broken Bow Cabins</Link></li>
                            <li><Link href="#">Broken Bow Travel Guide</Link></li>
                            <li><Link href="#">Beavers Bend State Park</Link></li>
                            <li><Link href="#">Top 28 Things To Do</Link></li>
                            <li><Link href="#">Boat & ATV Rentals</Link></li>
                            <li><Link href="#">Restaurants</Link></li>
                            <li><Link href="#">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">List Your Cabin</Link></li>
                            <li><Link href="#">Real Estate</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Win A Free 2 Nights Stay</Link></li>
                            <li><Link href="#">Buy Parking Pass</Link></li>
                            <li><Link href="#">Buy Fishing Licence</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                        <Image src="/secure-checkout.png" alt="Secure Checkout" width={185} height={50} />
                        {/*<Image src="/visa.svg" alt="Visa" width={40} height={24} />*/}
                        {/*<Image src="/mastercard.svg" alt="MasterCard" width={40} height={24} />*/}
                        {/*<Image src="/discover.svg" alt="Discover" width={40} height={24} />*/}
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-4">
                        <span>© 2025 Brokenbow. All Rights Reserved</span>
                        <span>|</span>
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:underline">Terms and Condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
