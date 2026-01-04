"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react"
import logo from "@/assests/MainImage/logo.png"
import { useState, useRef } from "react"

// Import all university logo images
import bostonUniversity from "@/assests/UniversityImageLogo/boston_university_qoxffs.png"
import duke from "@/assests/UniversityImageLogo/duke_eje4z6.png"
import hecParis from "@/assests/UniversityImageLogo/hec_paris_f7r1en.avif"
import institutPolytechParis from "@/assests/UniversityImageLogo/institut_polytech_de_paris_b8cqys.png"
import johnHopkins from "@/assests/UniversityImageLogo/john_hopkins_huca3j.png"
import kingsCollegeLondon from "@/assests/UniversityImageLogo/kings_college_london_oupuea.png"
import nusSingapore from "@/assests/UniversityImageLogo/n_u_singapore_odfhwz.avif"
import pekingUniversity from "@/assests/UniversityImageLogo/peking_university_i8otiq.png"
import uManchester from "@/assests/UniversityImageLogo/u_o_manchester_jgnemp.png"
import uOxford from "@/assests/UniversityImageLogo/u_o_oxford_ku4ude.avif"
import universidadAlacant from "@/assests/UniversityImageLogo/universiata_d_Alacant_zuma89.avif"
import universidadCarlosMadrid from "@/assests/UniversityImageLogo/universidad_carlos_de_madrid_xcpf2d.avif"
import universidadMurcia from "@/assests/UniversityImageLogo/universidad_de_murcia_mhagoz.png"
import universidadValladolid from "@/assests/UniversityImageLogo/universidad_de_Valladolid_ikyu4d.avif"
import universitySydney from "@/assests/UniversityImageLogo/university_of_sydney_vuktjo.avif"
import usc from "@/assests/UniversityImageLogo/usc_notm3b.png"

const universityLogos = [
  bostonUniversity,
  duke,
  hecParis,
  institutPolytechParis,
  johnHopkins,
  kingsCollegeLondon,
  nusSingapore,
  pekingUniversity,
  uManchester,
  uOxford,
  universidadAlacant,
  universidadCarlosMadrid,
  universidadMurcia,
  universidadValladolid,
  universitySydney,
  usc
]

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedField, setSelectedField] = useState("")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const degreeTypes = [
    "Bachelor degrees",
    "Masters degrees",
    "Preparatory",
    "Doctoral Degrees",
    "Postgraduate",
    "Post-Bachelors",
    "Postdoctoral Studies"
  ]

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full min-h-[80vh] flex flex-col py-10 md:py-0   space-y-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 w-full items-center">
        {/* Left Side - Content */}
        <div className="flex flex-col space-y-4 md:space-y-6">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              120,000+ study abroad degrees, one perfect for you.
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground my-5 md:my-0">
              Where will your studies take you?
            </h2>
          </div>

          
          {/* Field of Interest Selector */}
          <div className="relative w-full md:w-3/4">
            <div className="flex items-center border border-border rounded-lg px-4 py-2 bg-background hover:border-primary/50 transition-colors group">
              <Search className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
              <input
                type="text"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                placeholder="Choose field of interest"
                className="flex-1 text-base text-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground"
              />
              {selectedField && (
                <X 
                  className="h-4 w-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground cursor-pointer" 
                  onClick={() => setSelectedField("")}
                />
              )}
            </div>
          </div>

          {/* Study Destination Selector */}
          <div className="relative w-full md:w-3/4">
            <div className="flex items-center border border-border rounded-lg px-4 py-3 bg-background hover:border-primary/50 transition-colors group">
              <MapPin className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
              <input
                type="text"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                placeholder="Choose study destination"
                className="flex-1 text-base text-foreground bg-transparent border-none outline-none placeholder:text-muted-foreground"
              />
              {selectedLocation && (
                <X 
                  className="h-4 w-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground cursor-pointer" 
                  onClick={() => setSelectedLocation("")}
                />
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full md:w-3/4 text-base md:text-lg px-8 py-6 flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </Button>
          </div>

          {/* Degree Types with Navigation and Explore */}
          <div className="space-y-3">
            <div className="relative flex items-center gap-2">
              {/* Left Arrow - Only show when scrolled right */}
              {showLeftArrow && (
                <button
                  onClick={scrollLeft}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted hover:border-primary/50 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
              )}

              {/* Scrollable Container with Explore */}
              <div
                ref={scrollContainerRef}
                onScroll={checkScrollPosition}
                className="flex-1 flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth md:mt-8"
              >
                {/* Explore Text - Initially on left */}
                <span className="flex-shrink-0 text-base md:text-lg font-medium text-foreground whitespace-nowrap flex items-center">
                  Explore
                </span>
                
                {/* Degree Types */}
                {degreeTypes.map((degree, index) => (
                  <button
                    key={index}
                    className="flex-shrink-0 px-3 py-1 text-sm md:text-base border border-border rounded-2xl bg-background hover:bg-muted hover:border-primary/50 transition-colors text-foreground whitespace-nowrap"
                  >
                    {degree}
                  </button>
                ))}
              </div>

              {/* Right Arrow - Only show when there's more content to scroll */}
              {showRightArrow && (
                <button
                  onClick={scrollRight}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted hover:border-primary/50 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Logo */}
        <div className="hidden lg:flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
            <Image
              src={logo}
              alt="AbroadGuideBD Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* University Logos Marquee - Right to Left */}
      <section className="bg-background w-full -mt-[32px] md:-mt-[122px]">
        <div className="flex flex-col items-center md:py-8">
          <span className="text-sm font-medium text-muted-foreground mb-4">
            Trusted by 13,000+ universities worldwide
          </span>
          <div className="md:mt-4 inline-flex w-full flex-nowrap overflow-hidden">
            <div className="flex items-center animate-scroll [&_img]:max-w-none">
              {/* First set of logos */}
              {universityLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`University Logo ${index + 1}`}
                  width={150}
                  height={60}
                  className="mx-4 h-full object-contain md:mx-6"
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {universityLogos.map((logo, index) => (
                <Image
                  key={`duplicate-${index}`}
                  src={logo}
                  alt={`University Logo ${index + 1}`}
                  width={150}
                  height={60}
                  className="mx-4 h-full object-contain md:mx-6"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
