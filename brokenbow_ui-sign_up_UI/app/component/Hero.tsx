'use client'
import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="relative h-screen md:h-[70vh]">
            <Image
                src="/hero.png" // Place your image in /public
                alt="Cabin Hero"
                layout="fill"
                objectFit="cover"
                objectPosition="center 83%" // This moves the image upward
                priority
                quality={100}
            />
            {/* Overlay content */}
            <div className="absolute top-[16%] left-[12.5%] text-white  z-10">
                <h1 className="text-6xl leading-tight font-outfit max-w-2xl">
                    The Official Tourism & <br />
                    Cabin Site Of Broken Bow, Oklahoma
                </h1>
                <div className="mt-8 mr-4 w-full max-w-5xl">
                    <SearchBar />
                </div>
            </div>

        </section>
    );
}
