"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import japanImage from "@/assests/Image/japanImage.jpg"
import chinaImage from "@/assests/Image/chinaImage.jpg"
import southKoreaImage from "@/assests/Image/southKoreaImage.jpg"

// Placeholder for countries without images - using gradient backgrounds
type CountryData = {
  name: string
  href: string
  image: typeof japanImage
  hasImage: true
  gradient?: never
} | {
  name: string
  href: string
  image?: never
  hasImage: false
  gradient: string
}

const countryData: CountryData[] = [
  { name: "Japan", href: "/destinations/japan", image: japanImage, hasImage: true },
  { name: "China", href: "/destinations/china", image: chinaImage, hasImage: true },
  { name: "South Korea", href: "/destinations/south-korea", image: southKoreaImage, hasImage: true },
]

export function DestinationsCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate the array for seamless infinite scroll
  const duplicatedCountries = [...countryData, ...countryData]

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 animate-scroll ${
          isPaused ? "animate-scroll-paused" : ""
        }`}
        style={{
          width: "fit-content",
        }}
      >
        {duplicatedCountries.map((country, index) => (
          <Link
            key={`${country.name}-${index}`}
            href={country.href}
            className="flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] h-[180px] sm:h-[200px] md:h-[220px] rounded-lg overflow-hidden relative group cursor-pointer"
          >
            {country.hasImage ? (
              <div className="relative w-full h-full">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg text-center px-4">
                    {country.name}
                  </h3>
                </div>
              </div>
            ) : (
              <div className={`relative w-full h-full bg-gradient-to-br ${country.gradient || "from-gray-400 to-gray-600"}`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-lg text-center px-4 group-hover:scale-110 transition-transform duration-500">
                    {country.name}
                  </h3>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

