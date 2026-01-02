"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import chinaImage from "@/assests/Image/chinaImage.jpg"
import southKoreaImage from "@/assests/Image/southKoreaImage.jpg"

// Placeholder for countries without images - using gradient backgrounds
const countryData = [
  { name: "China", href: "/destinations/china", image: chinaImage, hasImage: true },
  { name: "South Korea", href: "/destinations/south-korea", image: southKoreaImage, hasImage: true },
  { name: "United Kingdom", href: "/destinations/united-kingdom", gradient: "from-blue-600 to-blue-800", hasImage: false },
  { name: "France", href: "/destinations/france", gradient: "from-blue-500 to-blue-700", hasImage: false },
  { name: "Germany", href: "/destinations/germany", gradient: "from-black to-yellow-600", hasImage: false },
  { name: "Italy", href: "/destinations/italy", gradient: "from-green-600 to-red-600", hasImage: false },
  { name: "United States", href: "/destinations/united-states", gradient: "from-blue-700 to-red-600", hasImage: false },
  { name: "Canada", href: "/destinations/canada", gradient: "from-red-600 to-red-800", hasImage: false },
  { name: "Mexico", href: "/destinations/mexico", gradient: "from-green-700 to-red-700", hasImage: false },
  { name: "Costa Rica", href: "/destinations/costa-rica", gradient: "from-blue-700 to-blue-900", hasImage: false },
  { name: "Argentina", href: "/destinations/argentina", gradient: "from-blue-500 to-blue-700", hasImage: false },
  { name: "Brazil", href: "/destinations/brazil", gradient: "from-green-600 to-yellow-600", hasImage: false },
  { name: "Chile", href: "/destinations/chile", gradient: "from-blue-600 to-red-600", hasImage: false },
  { name: "Colombia", href: "/destinations/colombia", gradient: "from-yellow-600 to-blue-700", hasImage: false },
  { name: "Australia", href: "/destinations/australia", gradient: "from-blue-600 to-blue-800", hasImage: false },
  { name: "New Zealand", href: "/destinations/new-zealand", gradient: "from-blue-700 to-blue-900", hasImage: false },
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
              <div className={`relative w-full h-full bg-gradient-to-br ${country.gradient}`}>
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

