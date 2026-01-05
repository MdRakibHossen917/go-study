"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, MapPin, ChevronLeft, ChevronRight, X, Compass, ClipboardCheck, FileText, Luggage } from "lucide-react"
import logo from "@/assests/MainImage/logo.png"
import { useState, useRef, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { BookOpen, Users, Star, MessageCircle, Quote } from "lucide-react"
import internationalStudentEurope from "@/assests/InternationalStudents/internationalStudentEurope.jpg.jpg"
import internationalStudentUSA from "@/assests/InternationalStudents/internationalStudentUSA.jpg"
import adultLearnersScholarship from "@/assests/InternationalStudents/adultLearnersScholarship.jpg"
import womensScholarship from "@/assests/InternationalStudents/women'sScholarship.jpg"
import youngWomenWalking from "@/assests/GirlsImage/young-women-walking-talking-street.jpg"
import happyStudents from "@/assests/GirlsImage/happy-students-near-university-campus.jpg"
import smileyWoman from "@/assests/GirlsImage/smiley-woman-working-laptop.jpg"
import southKoreaImage from "@/assests/Image/southKoreaImage.jpg"
import girlSittingReading from "@/assests/GirlsImage/girl-sitting-table-reading-flipping-page.jpg"
import girlHoldingCards from "@/assests/GirlsImage/girl-holding-card-boards-standing.jpg"
import studentsWalking from "@/assests/GirlsImage/students-walking-together.jpg"
import udayanaUniversity from "@/assests/UniversityCampus/Udayana University.jpg"
import lciBarcelona from "@/assests/UniversityCampus/LCI Barcelona.jpg"
import universityOfPecs from "@/assests/UniversityCampus/University of Pécs.jpg"
import universidadLCI from "@/assests/UniversityCampus/Universidad LCI.jpg"
import alAkhawaynUniversity from "@/assests/UniversityCampus/Al Akhawayn University.jpg"
import mahidolUniversity from "@/assests/UniversityCampus/Mahidol University.jpg"

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

// Comment Carousel Component
const CommentCarousel = () => {
  const comments = [
    {
      name: "Sarah Johnson",
      university: "University of Oxford",
      description: "Studying abroad at Oxford was a life-changing experience. The academic rigor combined with the rich cultural immersion helped me grow both personally and professionally. I made lifelong friends and gained perspectives I never would have had otherwise.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      university: "Tokyo University",
      description: "My time in Japan exceeded all expectations. The university's support system was excellent, and I was able to explore both traditional and modern aspects of Japanese culture. This experience has opened many doors for my career.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      university: "University of Barcelona",
      description: "Barcelona became my second home. The vibrant city life, excellent professors, and diverse student community made my study abroad experience unforgettable. I improved my Spanish significantly and gained confidence in international settings.",
      rating: 4
    },
    {
      name: "David Kim",
      university: "Seoul National University",
      description: "Studying in South Korea was incredible. The technology-focused curriculum and innovative teaching methods were exactly what I needed. The food, culture, and people made every day an adventure.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      university: "University of Sydney",
      description: "Australia offered the perfect balance of academic excellence and outdoor adventure. The university's research opportunities were outstanding, and I loved exploring the beautiful landscapes during my free time.",
      rating: 5
    },
    {
      name: "Lucas Schmidt",
      university: "Humboldt University Berlin",
      description: "Berlin's rich history and vibrant arts scene made my study abroad experience unique. The university's international programs are well-structured, and I appreciated the emphasis on critical thinking and independent research.",
      rating: 4
    }
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    dragFree: true,
    containScroll: 'trimSnaps',
    startIndex: 1
  })

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 md:gap-6">
          {comments.map((comment, index) => (
            <div 
              key={index} 
              className="flex-[0_0_84%] md:flex-[0_0_46%] min-w-0"
            >
              <Card 
                className="group relative overflow-hidden border-2 border-transparent hover:border-[#408CAD]/30 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50/50 h-full"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote className="w-24 h-24 text-[#408CAD]" />
                </div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start gap-4">
                    {/* Enhanced Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#408CAD] to-[#2d6a8a] flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-white">
                        {comment.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold text-[#424242] mb-1 group-hover:text-[#408CAD] transition-colors">
                        {comment.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-semibold text-[#408CAD] mb-3">
                        {comment.university}
                      </CardDescription>
                      {/* Star Rating */}
                      <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 transition-all ${
                              i < comment.rating
                                ? "fill-yellow-400 text-yellow-400 drop-shadow-sm"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-gray-600">
                          {comment.rating}.0
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <div className="relative pl-6">
                    {/* Quote Icon */}
                    <Quote className="absolute left-0 top-0 w-5 h-5 text-[#408CAD]/30" />
                    <p className="text-base text-[#424242] leading-relaxed italic">
                      "{comment.description}"
                    </p>
                  </div>
                </CardContent>
                
                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#408CAD]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Image Carousel Component
const ImageCarousel = () => {
  const carouselImages = [
    southKoreaImage,
    girlSittingReading,
    girlHoldingCards,
    studentsWalking
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...carouselImages, ...carouselImages]

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    dragFree: false,
    containScroll: 'trimSnaps'
  })

  useEffect(() => {
    if (!emblaApi) return

    const autoplay = () => {
      emblaApi.scrollNext()
    }

    const interval = setInterval(autoplay, 3000) // Change slide every 3 seconds

    return () => {
      clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2 md:gap-4">
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              className="flex-[0_0_calc(80%-0.25rem)] md:flex-[0_0_calc(33.333%-0.67rem)] min-w-0"
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src={image}
                  alt={`Carousel image ${(index % carouselImages.length) + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedField, setSelectedField] = useState("")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [activeTab, setActiveTab] = useState<'what' | 'who' | 'why'>('what')

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
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#424242] leading-tight">
              110,000+ study abroad degrees, one perfect for you.
        </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#424242] my-5 md:my-0">
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
            <Button size="lg" className="w-full md:w-3/4 text-base md:text-lg px-8 py-6 flex items-center  bg-[#408CAD] justify-center gap-2">
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
                className="flex-1 flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide scroll-smooth  "
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

      {/* Featured Study Abroad Programs Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-left space-y-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
              Featured Study Abroad Programs
            </h2>
            <p className="text-lg text-[#424242] leading-relaxed">
              Explore our featured study abroad programs, carefully curated to offer immersive educational experiences, while also exploring some of the most exciting a diverse destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: udayanaUniversity,
                title: "Study Abroad at Udayana University in Bali",
                duration: "Fall Semester, Spring Semester",
                description: "Explore vibrant Bali while studying at Udayana University. Experience rich culture, stunning landscapes, and a unique academic journey in paradise.",
                price: "Semester: $9,995"
              },
              {
                image: lciBarcelona,
                title: "Study Abroad at LCI Barcelona in Spain",
                duration: "Fall Semester, Spring Semester",
                description: "Discover exciting study abroad opportunities at LCI Barcelona. Immerse yourself in a vibrant culture while advancing your education in a dynamic environment.",
                price: "Semester: $14,495"
              },
              {
                image: universityOfPecs,
                title: "Study Abroad at University of Pécs in Hungary",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Explore exciting study abroad opportunities in Hungary at the University of Pecs. Immerse yourself in a vibrant culture while earning your degree.",
                price: "Semester: $8,495"
              },
              {
                image: universidadLCI,
                title: "Study Abroad at Universidad LCI Veritas in Costa Rica",
                duration: "Fall Semester, Spring Semester, Summer Break, Winter Break",
                description: "Discover study abroad opportunities at Universidad LCI Veritas. Immerse yourself in vibrant culture, gain valuable experience, and enhance your education.",
                price: "Semester: $10,995"
              },
              {
                image: alAkhawaynUniversity,
                title: "Study Abroad at Al Akhawayn University in Morocco",
                duration: "Fall Semester, Spring Semester",
                description: "Discover the charm of Morocco while studying at Al Akhawayn University. Experience a unique blend of culture, education, and adventure in a stunning setting.",
                price: "Semester: $10,995"
              },
              {
                image: mahidolUniversity,
                title: "Study Abroad at Mahidol University in Thailand",
                duration: "Fall Semester, Spring Semester, Summer Break",
                description: "Discover unique study abroad opportunities at Mahidol University International College in Thailand. Immerse yourself in vibrant culture and quality education.",
                price: "Semester: $8,495"
              }
            ].map((program, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#424242] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {program.duration}
                  </p>
                  <p className="text-base text-[#424242] leading-relaxed mb-4 flex-grow">
                    {program.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold text-[#424242] bg-[#E7E7E7] px-4 py-2 rounded inline-block">
                      {program.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="text-[#424242] font-medium underline text-base inline-flex items-center gap-1 hover:text-primary transition-colors">
              VIEW ALL AVAILABLE PROGRAMS
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="w-full py-8 md:py-12">
        <div className="space-y-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242] mb-2">
              Scholarships for international students
            </h2>
            <p className="text-lg text-muted-foreground">
              Apply for one of 8 educations.com scholarships!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { image: internationalStudentEurope, title: "Study a Master's in Europe Scholarship 2026", amount: "€5,000", date: "Aug-25", url: "/scholarships/masters-europe-scholarship" },
              { image: internationalStudentUSA, title: "Study a Bachelor's in the USA Scholarship 2026", amount: "EUR 4,000", date: "Aug-25", url: "/scholarships/bachelors-usa-scholarship" },
              { image: adultLearnersScholarship, title: "Adult Learners Scholarship 2026", amount: "EUR 6,000", date: "Aug-25", url: "/scholarships/adult-learners-scholarship" },
              { image: womensScholarship, title: "Women's Scholarship for International Students 2026", amount: "$5,000", date: "Aug-25", url: "/scholarships/womens-scholarship" }
            ].map((scholarship, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden bg-background hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={scholarship.image}
                    alt={scholarship.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-base font-bold text-[#424242]">{scholarship.amount}</span>
                    <span className="text-sm text-muted-foreground">{scholarship.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#424242] mb-2 group-hover:text-primary transition-colors">
                    {scholarship.title}
                  </h3>
                  <Link href={scholarship.url} className="text-primary font-medium underline text-sm mt-auto flex items-center gap-1 w-fit hover:text-primary/80 transition-colors">
                    Read more
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/scholarships" className="text-primary font-medium underline text-sm inline-flex items-center gap-1 hover:text-primary/80 transition-colors">
              View all scholarships
            </Link>
          </div>
        </div>
      </section>

      {/* How Study Abroad works Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
              How Study Abroad works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="md:border-r md:border-gray-300 md:pr-8 md:last:border-r-0 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 relative hover:scale-110 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 576 576" 
                    width="48" 
                    height="48" 
                    preserveAspectRatio="xMidYMid meet" 
                    style={{ width: '100%', height: '100%' }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_7">
                        <rect width="576" height="576" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_7)">
                      <g transform="matrix(0.8449987769126892,-0.5347681641578674,0.5347681641578674,0.8449987769126892,217.32093811035156,233.17071533203125)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M38.93199920654297,-112.91500091552734 C55.32400131225586,-107.23699951171875 70.72100067138672,-97.86000061035156 83.8239974975586,-84.78399658203125 C130.21200561523438,-38.48899841308594 130.28799438476562,36.64500045776367 83.99299621582031,83.03299713134766 C37.698001861572266,129.42100524902344 -37.43600082397461,129.4969940185547 -83.8239974975586,83.2020034790039 C-130.21200561523438,36.90700149536133 -130.28799438476562,-38.22600173950195 -83.99299621582031,-84.61399841308594 C-65.75199890136719,-102.89099884033203 -43.03499984741211,-113.9800033569336 -19.36199951171875,-117.8740005493164"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9990282654762268,-0.0440741702914238,0.0440741702914238,0.9990282654762268,327.8963928222656,333.3885803222656)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-21.979999542236328,-21.988000869750977 C-21.979999542236328,-21.988000869750977 21.979999542236328,21.988000869750977 21.979999542236328,21.988000869750977"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9990282654762268,-0.0440741702914238,0.0440741702914238,0.9990282654762268,402.8190002441406,401.8819885253906)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M25.70400047302246,59.777000427246094 C25.70400047302246,59.777000427246094 -66.90899658203125,-32.64899826049805 -66.90899658203125,-32.64899826049805 C-66.90899658203125,-32.64899826049805 -32.79399871826172,-66.83300018310547 -32.79399871826172,-66.83300018310547 C-32.79399871826172,-66.83300018310547 59.819000244140625,25.593000411987305 59.819000244140625,25.593000411987305 C69.25900268554688,35.013999938964844 69.27400207519531,50.303001403808594 59.85300064086914,59.74300003051758 C59.85300064086914,59.74300003051758 59.85300064086914,59.74300003051758 59.85300064086914,59.74300003051758 C50.43199920654297,69.18299865722656 35.14400100708008,69.197998046875 25.70400047302246,59.777000427246094z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#424242] mb-4">
                Explore Your Options
              </h3>
              <p className="text-base text-[#424242] leading-relaxed mb-6">
                Start by browsing study abroad programs that align with your academic goals and personal interests. Whether you dream of studying art in Italy or language and culture in South Korea, there's an exciting world of opportunities waiting for you.
              </p>
              <Link href="#" className="text-[#424242] font-semibold underline text-base hover:text-primary transition-colors inline-block">
                Browse Programs
              </Link>
            </div>

            {/* Step 2 */}
            <div className="md:border-r md:border-gray-300 md:pr-8 md:last:border-r-0 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 relative hover:scale-110 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 576 576" 
                    width="48" 
                    height="48" 
                    preserveAspectRatio="xMidYMid meet" 
                    style={{ width: '100%', height: '100%' }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_17">
                        <rect width="576" height="576" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_17)">
                      <g transform="matrix(0.9999852180480957,0.00543818436563015,-0.00543818436563015,0.9999852180480957,288.1332702636719,415.4743347167969)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M138.68899536132812,-23.400999069213867 C138.68899536132812,-23.400999069213867 211.20599365234375,-23.400999069213867 211.20599365234375,-23.400999069213867 C211.20599365234375,-23.400999069213867 211.20599365234375,-1.5989999771118164 211.20599365234375,-1.5989999771118164 C211.20599365234375,12.208000183105469 200.01300048828125,23.400999069213867 186.20599365234375,23.400999069213867 C186.20599365234375,23.400999069213867 -186.20599365234375,23.400999069213867 -186.20599365234375,23.400999069213867 C-200.01300048828125,23.400999069213867 -211.20599365234375,12.208000183105469 -211.20599365234375,-1.5989999771118164 C-211.20599365234375,-1.5989999771118164 -211.20599365234375,-23.400999069213867 -211.20599365234375,-23.400999069213867 C-211.20599365234375,-23.400999069213867 81.28199768066406,-23.400999069213867 81.28199768066406,-23.400999069213867"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9999852180480957,0.00543818436563015,-0.00543818436563015,0.9999852180480957,288.95208740234375,264.9105529785156)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-184.96099853515625,127.16500091552734 C-184.96099853515625,127.16500091552734 -184.96099853515625,-102.16500091552734 -184.96099853515625,-102.16500091552734 C-184.96099853515625,-115.97200012207031 -173.76800537109375,-127.16500091552734 -159.96099853515625,-127.16500091552734 C-159.96099853515625,-127.16500091552734 159.96099853515625,-127.16500091552734 159.96099853515625,-127.16500091552734 C173.76800537109375,-127.16500091552734 184.96099853515625,-115.97200012207031 184.96099853515625,-102.16500091552734 C184.96099853515625,-102.16500091552734 184.96099853515625,127.16500091552734 184.96099853515625,127.16500091552734"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9996304512023926,0.027183569967746735,-0.027183569967746735,0.9996304512023926,289.947265625,296.03143310546875)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M64.22200012207031,-38.00199890136719 C64.22200012207031,-38.00199890136719 64.22200012207031,22.83300018310547 64.22200012207031,22.83300018310547 C64.22200012207031,31.209999084472656 57.430999755859375,38.00199890136719 49.05400085449219,38.00199890136719 C49.05400085449219,38.00199890136719 -49.05400085449219,38.00199890136719 -49.05400085449219,38.00199890136719 C-57.430999755859375,38.00199890136719 -64.22200012207031,31.209999084472656 -64.22200012207031,22.83300018310547 C-64.22200012207031,22.83300018310547 -64.22200012207031,-37.7140007019043 -64.22200012207031,-37.7140007019043"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9996304512023926,0.027183569967746735,-0.027183569967746735,0.9996304512023926,291.1454162597656,239.53811645507812)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M109.90499877929688,-0.44999998807907104 C109.90499877929688,-0.44999998807907104 0,-45.49599838256836 0,-45.49599838256836 C0,-45.49599838256836 -109.90499877929688,-0.44999998807907104 -109.90499877929688,-0.44999998807907104 C-109.90499877929688,-0.44999998807907104 -0.014999999664723873,45.49599838256836 -0.014999999664723873,45.49599838256836 C-0.014999999664723873,45.49599838256836 109.90499877929688,-0.44999998807907104 109.90499877929688,-0.44999998807907104z"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9996304512023926,0.027183569967746735,-0.027183569967746735,0.9996304512023926,188.453857421875,264.39178466796875)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M0,24.77199935913086 C0,24.77199935913086 0,-24.77199935913086 0,-24.77199935913086"></path>
                        </g>
                      </g>
                      <g transform="matrix(1.2375235557556152,0.03365274518728256,-0.03365274518728256,1.2375235557556152,186.79205322265625,325.502197265625)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M0,0 C0,0 0,0 0,0"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#424242] mb-4">
                Pick a Program
              </h3>
              <p className="text-base text-[#424242] leading-relaxed mb-6">
                Once you've explored your options, select a program that best fits your aspirations. Consider factors like course offerings, location, and cultural experiences to make an informed decision.
              </p>
              <Link href="#" className="text-[#424242] font-semibold underline text-base hover:text-primary transition-colors inline-block">
                Talk to an Advisor
              </Link>
            </div>

            {/* Step 3 */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 relative hover:scale-110 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 576 576" 
                    width="48" 
                    height="48" 
                    preserveAspectRatio="xMidYMid meet" 
                    style={{ width: '100%', height: '100%' }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_36">
                        <rect width="576" height="576" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_36)">
                      <g transform="matrix(0.9994117617607117,0.03429495915770531,-0.03429495915770531,0.9994117617607117,282.20159912109375,300.341552734375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-180.2779998779297,64.25900268554688 C-180.2779998779297,64.25900268554688 -180.2779998779297,-144.07400512695312 -180.2779998779297,-144.07400512695312 C-180.2779998779297,-157.88099670410156 -169.0850067138672,-169.07400512695312 -155.2779998779297,-169.07400512695312 C-155.2779998779297,-169.07400512695312 155.2779998779297,-169.07400512695312 155.2779998779297,-169.07400512695312 C169.0850067138672,-169.07400512695312 180.2779998779297,-157.88099670410156 180.2779998779297,-144.07400512695312 C180.2779998779297,-144.07400512695312 180.2779998779297,144.07400512695312 180.2779998779297,144.07400512695312 C180.2779998779297,157.88099670410156 169.0850067138672,169.07400512695312 155.2779998779297,169.07400512695312 C155.2779998779297,169.07400512695312 -155.2779998779297,169.07400512695312 -155.2779998779297,169.07400512695312 C-169.0850067138672,169.07400512695312 -180.2779998779297,157.88099670410156 -180.2779998779297,144.07400512695312 C-180.2779998779297,144.07400512695312 -180.2779998779297,122.22200012207031 -180.2779998779297,122.22200012207031"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9994117617607117,0.03429495915770531,-0.03429495915770531,0.9994117617607117,4.674657344818115,-9.800650596618652)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,185.63900756835938,137.87399291992188)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,31.388999938964844 C0,31.388999938964844 0,-31.388999938964844 0,-31.388999938964844"></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,386.47198486328125,137.87399291992188)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,31.388999938964844 C0,31.388999938964844 0,-31.388999938964844 0,-31.388999938964844"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9994117617607117,0.03429495915770531,-0.03429495915770531,0.9994117617607117,282.20159912109375,300.341552734375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M101.94400024414062,0 C101.94400024414062,56.301998138427734 56.301998138427734,101.94400024414062 0,101.94400024414062 C-56.301998138427734,101.94400024414062 -101.94400024414062,56.301998138427734 -101.94400024414062,0 C-101.94400024414062,-56.301998138427734 -56.301998138427734,-101.94400024414062 0,-101.94400024414062 C56.301998138427734,-101.94400024414062 101.94400024414062,-56.301998138427734 101.94400024414062,0z"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9994120001792908,0.03428725153207779,-0.03428725153207779,0.9994120001792908,308.0576477050781,276.1678771972656)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M-25,25 C-25,25 -25,-25 -25,-25"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9998639822006226,0.016495391726493835,-0.016495391726493835,0.9998639822006226,307.6241455078125,275.7117919921875)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M25,25 C25,25 -25,25 -25,25"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#424242] mb-4">
                Submit an application
              </h3>
              <p className="text-base text-[#424242] leading-relaxed mb-6">
                Fill out our simple and easy online application, then keep an eye on your email for a response from one of our advisors.
              </p>
              <Link href="#" className="text-[#424242] font-semibold underline text-base hover:text-primary transition-colors inline-block">
                Apply Now
              </Link>
            </div>

            {/* Step 4 */}
            <div className="md:border-r md:border-gray-300 md:pr-8 md:last:border-r-0 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 relative hover:scale-110 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 576 576" 
                    width="48" 
                    height="48" 
                    preserveAspectRatio="xMidYMid meet" 
                    style={{ width: '100%', height: '100%' }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_112">
                        <rect width="576" height="576" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_112)">
                      <g transform="matrix(0.9965457916259766,0.08304499089717865,-0.08304499089717865,0.9965457916259766,435.45184326171875,291.545654296875)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M31.944000244140625,36.944000244140625 C31.944000244140625,36.944000244140625 -31.944000244140625,36.944000244140625 -31.944000244140625,36.944000244140625 C-38.847999572753906,36.944000244140625 -44.444000244140625,31.347999572753906 -44.444000244140625,24.444000244140625 C-44.444000244140625,24.444000244140625 -44.444000244140625,-24.444000244140625 -44.444000244140625,-24.444000244140625 C-44.444000244140625,-31.347999572753906 -38.847999572753906,-36.944000244140625 -31.944000244140625,-36.944000244140625 C-31.944000244140625,-36.944000244140625 31.944000244140625,-36.944000244140625 31.944000244140625,-36.944000244140625 C38.847999572753906,-36.944000244140625 44.444000244140625,-31.347999572753906 44.444000244140625,-24.444000244140625 C44.444000244140625,-24.444000244140625 44.444000244140625,24.444000244140625 44.444000244140625,24.444000244140625 C44.444000244140625,31.347999572753906 38.847999572753906,36.944000244140625 31.944000244140625,36.944000244140625z"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9310957193374634,0.36477506160736084,-0.36477506160736084,0.9310957193374634,301.724365234375,143.86866760253906)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M-141.85000610351562,37.69499969482422 C-141.85000610351562,37.69499969482422 -141.9250030517578,37.41999816894531 -141.9250030517578,37.41999816894531 C-141.9250030517578,37.41999816894531 92.26300048828125,-36.52799987792969 92.26300048828125,-36.52799987792969 C93.77999877929688,-37.00699996948242 95.30999755859375,-37.33399963378906 96.83399963378906,-37.516998291015625"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9965457916259766,0.08304499089717865,-0.08304499089717865,0.9965457916259766,289.4019775390625,279.37591552734375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-18.83799934387207,140.56199645996094 C-18.83799934387207,140.56199645996094 -145.35000610351562,140.56199645996094 -145.35000610351562,140.56199645996094 C-159.1750030517578,140.56199645996094 -170.35000610351562,129.36199951171875 -170.35000610351562,115.56199645996094 C-170.35000610351562,115.56199645996094 -170.35000610351562,-115.56199645996094 -170.35000610351562,-115.56199645996094 C-170.35000610351562,-129.36199951171875 -159.1750030517578,-140.56199645996094 -145.35000610351562,-140.56199645996094 C-145.35000610351562,-140.56199645996094 145.35000610351562,-140.56199645996094 145.35000610351562,-140.56199645996094 C159.14999389648438,-140.56199645996094 170.35000610351562,-129.36199951171875 170.35000610351562,-115.56199645996094 C170.35000610351562,-115.56199645996094 170.35000610351562,-36.9379997253418 170.35000610351562,-36.9379997253418"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9965457916259766,0.08304499089717865,-0.08304499089717865,0.9965457916259766,386.4129333496094,376.5177307128906)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M65.60700225830078,-51.8120002746582 C65.60700225830078,-51.8120002746582 65.60700225830078,26.812000274658203 65.60700225830078,26.812000274658203 C65.60700225830078,40.61199951171875 54.40700149536133,51.8120002746582 40.606998443603516,51.8120002746582 C40.606998443603516,51.8120002746582 -65.60700225830078,51.8120002746582 -65.60700225830078,51.8120002746582"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#424242] mb-4">
                Funding Your Program
              </h3>
              <p className="text-base text-[#424242] leading-relaxed mb-6">
                Make studying abroad even more affordable by exploring scholarships, grants, and financial aid options.
              </p>
              <Link href="#" className="text-[#424242] font-semibold underline text-base hover:text-primary transition-colors inline-block">
                Explore Funding Options
              </Link>
            </div>

            {/* Step 5 */}
            <div className="md:border-r md:border-gray-300 md:pr-8 md:last:border-r-0 p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 relative hover:scale-110 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 576 576" 
                    width="48" 
                    height="48" 
                    preserveAspectRatio="xMidYMid meet" 
                    style={{ width: '100%', height: '100%' }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_99">
                        <rect width="576" height="576" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_99)">
                      <g transform="matrix(1,0,0,1,288,133.2469940185547)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-70.55599975585938,30.486000061035156 C-70.55599975585938,30.486000061035156 -70.5573501586914,-5.46665096282959 -70.5573501586914,-5.46665096282959 C-70.5573501586914,-19.273651123046875 -59.36435317993164,-30.466651916503906 -45.557350158691406,-30.466651916503906 C-45.557350158691406,-30.466651916503906 45.55464553833008,-30.466651916503906 45.55464553833008,-30.466651916503906 C59.36164474487305,-30.466651916503906 70.55464172363281,-19.273651123046875 70.55464172363281,-5.46665096282959 C70.55464172363281,-5.46665096282959 70.55599975585938,30.486000061035156 70.55599975585938,30.486000061035156"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9999998807907104,0.00044109937152825296,-0.00044109937152825296,0.9999998807907104,0.07342529296875,-2.638397216796875)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,365.3219909667969,203.27099609375)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M36.904998779296875,-36.904998779296875 C36.904998779296875,-36.904998779296875 -36.904998779296875,36.904998779296875 -36.904998779296875,36.904998779296875"></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,296.4700012207031,272.02899169921875)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M-40.46200180053711,23.177000045776367 C-40.46200180053711,23.177000045776367 -23.177000045776367,40.46200180053711 -23.177000045776367,40.46200180053711 C-13.413999557495117,50.224998474121094 2.4149999618530273,50.224998474121094 12.178000450134277,40.46200180053711 C12.178000450134277,40.46200180053711 40.46200180053711,12.178000450134277 40.46200180053711,12.178000450134277 C50.224998474121094,2.4149999618530273 50.224998474121094,-13.413999557495117 40.46200180053711,-23.177000045776367 C40.46200180053711,-23.177000045776367 23.177000045776367,-40.46200180053711 23.177000045776367,-40.46200180053711 C13.413999557495117,-50.224998474121094 -2.4149999618530273,-50.224998474121094 -12.178000450134277,-40.46200180053711 C-12.178000450134277,-40.46200180053711 -40.46200180053711,-12.178000450134277 -40.46200180053711,-12.178000450134277 C-50.224998474121094,-2.4149999618530273 -50.224998474121094,13.413999557495117 -40.46200180053711,23.177000045776367z"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,0,-2.46099853515625)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,402.0740051269531,318)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,-151.66700744628906 C0,-151.66700744628906 0,151.66700744628906 0,151.66700744628906"></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,173.92599487304688,318)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,151.66700744628906 C0,151.66700744628906 0,-151.66700744628906 0,-151.66700744628906"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,315.53900146484375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-180.2310028076172,-50.74100112915039 C-180.2310028076172,-50.74100112915039 -180.2310028076172,126.66699981689453 -180.2310028076172,126.66699981689453 C-180.2310028076172,140.4739990234375 -169.03799438476562,151.66700744628906 -155.2310028076172,151.66700744628906 C-155.2310028076172,151.66700744628906 155.2310028076172,151.66700744628906 155.2310028076172,151.66700744628906 C169.03799438476562,151.66700744628906 180.2310028076172,140.4739990234375 180.2310028076172,126.66699981689453 C180.2310028076172,126.66699981689453 180.2310028076172,-126.66699981689453 180.2310028076172,-126.66699981689453 C180.2310028076172,-140.4739990234375 169.03799438476562,-151.66700744628906 155.2310028076172,-151.66700744628906 C155.2310028076172,-151.66700744628906 -155.2310028076172,-151.66700744628906 -155.2310028076172,-151.66700744628906 C-169.03799438476562,-151.66700744628906 -180.2310028076172,-140.4739990234375 -180.2310028076172,-126.66699981689453 C-180.2310028076172,-126.66699981689453 -180.2310028076172,-112.16300201416016 -180.2310028076172,-109.08799743652344"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#424242] mb-4">
                Prepare to Travel
              </h3>
              <p className="text-base text-[#424242] leading-relaxed mb-6">
                Once accepted, start preparing for your adventure! This includes applying for a visa, booking your travel, and packing essentials for your new home away from home.
              </p>
              <Link href="#" className="text-[#424242] font-semibold underline text-base hover:text-primary transition-colors inline-block">
                Things You'll Need
              </Link>
            </div>

            {/* Step 6 */}
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 relative hover:scale-110 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 576 576" 
                    width="48" 
                    height="48" 
                    preserveAspectRatio="xMidYMid meet" 
                    style={{ width: '100%', height: '100%' }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_52">
                        <rect width="576" height="576" x="0" y="0"></rect>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_52)">
                      <g transform="matrix(1,0,0,1,288,329.9021301269531)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M120,-106.97599792480469 C120,-106.97599792480469 185,-106.97599792480469 185,-106.97599792480469 C198.75,-106.97599792480469 210,-95.72599792480469 210,-81.97599792480469 C210,-81.97599792480469 210,81.97599792480469 210,81.97599792480469 C210,95.72599792480469 198.75,106.97599792480469 185,106.97599792480469 C185,106.97599792480469 -185,106.97599792480469 -185,106.97599792480469 C-198.75,106.97599792480469 -210,95.72599792480469 -210,81.97599792480469 C-210,81.97599792480469 -210,-81.97599792480469 -210,-81.97599792480469 C-210,-95.72599792480469 -198.75,-106.97599792480469 -185,-106.97599792480469 C-185,-106.97599792480469 120,-106.97599792480469 120,-106.97599792480469z"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,181.78492736816406,329.9021301269531)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M-55.505001068115234,0 C-55.505001068115234,0 55.505001068115234,0 55.505001068115234,0"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,169.09591674804688,329.9021301269531)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M-17.316999435424805,41.03499984741211 C-17.316999435424805,41.03499984741211 17.316999435424805,0 17.316999435424805,0 C17.316999435424805,0 -17.316999435424805,-41.03499984741211 -17.316999435424805,-41.03499984741211"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,119.09593200683594,329.9021301269531)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(9,157,117)" strokeOpacity="1" strokeWidth="17.5" d=" M-5,11.847999572753906 C-5,11.847999572753906 5,0 5,0 C5,0 -5,-11.847999572753906 -5,-11.847999572753906"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,403,304.9021301269531)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-42.499000549316406,0 C-27.964000701904297,0 45,0 45,0"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,403,354.9021301269531)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-42.499000549316406,0 C-27.964000701904297,0 45,0 45,0"></path>
                        </g>
                      </g>
                      <g style={{ display: 'none' }} transform="matrix(1,0,0,1,403,307.4959716796875)" opacity="1">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-45,0 C-45,0 45,0 45,0"></path>
                        </g>
                      </g>
                      <g style={{ display: 'none' }} transform="matrix(1,0,0,1,403,357.4959716796875)" opacity="1">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-45,0 C-45,0 45,0 45,0"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,417.8346862792969)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,-19.829999923706055 C0,-19.829999923706055 0,6.751999855041504 0,16.392000198364258"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,330.57568359375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,-19.829999923706055 C0,-19.829999923706055 0,19.829999923706055 0,19.829999923706055"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,243.315673828125)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M0,-19.829999923706055 C0,-19.829999923706055 0,19.829999923706055 0,19.829999923706055"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,197.83468627929688)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d="M0 0"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,110.57568359375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d="M0 0"></path>
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,288,23.315673828125)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d="M0 0"></path>
                        </g>
                      </g>
                      <g transform="matrix(0.9999785423278809,-0.006547617260366678,0.006547617260366678,0.9999785423278809,-1.47314453125,-1.532073974609375)" opacity="1" style={{ display: 'block' }}>
                        <g opacity="1" transform="matrix(1,0,0,1,233.98500061035156,201.00999450683594)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-72.55899810791016,24.510000228881836 C-72.55899810791016,24.510000228881836 72.55899810791016,-24.510000228881836 72.55899810791016,-24.510000228881836"></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,416.8110046386719,181.17100524902344)">
                          <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(8,8,8)" strokeOpacity="1" strokeWidth="17.5" d=" M-58.71799850463867,-22.083999633789062 C-58.71799850463867,-22.083999633789062 3.4079999923706055,-43.06999969482422 3.4079999923706055,-43.06999969482422 C16.135000228881836,-47.36899948120117 30.06599998474121,-40.472999572753906 34.3650016784668,-27.746000289916992 C34.3650016784668,-27.746000289916992 58.71799850463867,44.3489990234375 58.71799850463867,44.3489990234375"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#424242] mb-4">
                Embark on Your Journey
              </h3>
              <p className="text-base text-[#424242] leading-relaxed mb-6">
                Immerse yourself in a new culture, challenge yourself, and create unforgettable memories. Studying abroad is a transformative journey—make the most of every moment!
              </p>
              <Link href="#" className="text-[#424242] font-semibold underline text-base hover:text-primary transition-colors inline-block">
                Hear From Our Alumni
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="w-full py-8 md:py-16 overflow-hidden">
        <div className="w-full">
          <ImageCarousel />
        </div>
      </section>

      {/* Study Abroad Tabs Section */}
      <section className="w-full py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs Navigation */}
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap mb-8">
            <button
              onClick={() => setActiveTab('what')}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-colors ${
                activeTab === 'what'
                  ? 'border border-b-0 rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-900'
                  : 'border-b border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>What is Study Abroad?</span>
            </button>
            <button
              onClick={() => setActiveTab('who')}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-colors ${
                activeTab === 'who'
                  ? 'border border-b-0 rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-900'
                  : 'border-b border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Who can Study Abroad?</span>
            </button>
            <button
              onClick={() => setActiveTab('why')}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-colors ${
                activeTab === 'why'
                  ? 'border border-b-0 rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-900'
                  : 'border-b border-gray-400 dark:border-gray-600 text-gray-400 dark:text-gray-600'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Why Study Abroad?</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              {activeTab === 'what' && (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
                    What is Study Abroad?
                  </h2>
                  <div className="space-y-4 text-[#424242]">
                    <p className="text-base leading-relaxed">
                      Studying abroad is more than just earning credits in a new country—it's a life-changing adventure that reshapes how you see the world and yourself. It's about stepping outside your comfort zone, immersing yourself in new cultures, and experiencing different perspectives firsthand.
                    </p>
                    <p className="text-base leading-relaxed">
                      Picture yourself exploring beaches in Bali or trying delicious street food in Seoul between classes. Beyond academics, you'll develop valuable life skills, expand your global network, and create unforgettable memories. This is education on your terms, in places that no textbook can capture.
                    </p>
                    <p className="text-base font-semibold">
                      Ready to trade your traditional classroom for the world?
                    </p>
                  </div>
        <div className="pt-4">
                    <Link 
                      href="#" 
                      className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      HOW TO PICK A PROGRAM
                    </Link>
                  </div>
                </>
              )}

              {activeTab === 'who' && (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
                    Who can Study Abroad?
                  </h2>
                  <div className="space-y-4 text-[#424242]">
                    <p className="text-base leading-relaxed">
                      If you're curious about the world and eager to shake up your academic routine, studying abroad is for you. Whether you're a history lover, science enthusiast, art aficionado, or anything in between, there are programs designed to match your interests.
                    </p>
                    <p className="text-base leading-relaxed">
                      Worried about costs? Don't be! With financial aid, scholarships, and budget-friendly programs available, studying abroad is more accessible than ever. Whether you want to master a new language, gain international experience, or simply immerse yourself in a new culture, there's a place for you.
                    </p>
                    <p className="text-base font-semibold">
                      The world is your classroom—go explore it!
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link 
                      href="#" 
                      className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      HOW TO PICK A PROGRAM
                    </Link>
                  </div>
                </>
              )}

              {activeTab === 'why' && (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#424242]">
                    Why Study Abroad?
                  </h2>
                  <div className="space-y-4 text-[#424242]">
                    <p className="text-base leading-relaxed">
                      The world is your classroom, and there's no better way to build life skills, expand your global perspective, and make your resume stand out. Picture yourself exploring sites and cities, trying new foods, and making lifelong friends in a culture completely different from your own.
                    </p>
                    <p className="text-base leading-relaxed">
                      But studying abroad isn't just about Insta-worthy moments—it's about real growth. You'll gain adaptability, problem-solving skills, and the confidence to navigate new environments. Plus, you'll build a global network and experience the kind of learning no textbook can offer.
                    </p>
                    <p className="text-base leading-relaxed">
                      Ready to step outside your comfort zone and create unforgettable stories? Your adventure starts now.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Link 
                      href="#" 
                      className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      HOW TO PICK A PROGRAM
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Right Side - Image */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={
                  activeTab === 'who' 
                    ? happyStudents 
                    : activeTab === 'why' 
                    ? smileyWoman 
                    : youngWomenWalking
                }
                alt={
                  activeTab === 'who' 
                    ? "Happy students near university campus" 
                    : activeTab === 'why'
                    ? "Smiley woman working on laptop"
                    : "Young women walking and talking on the street"
                }
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424242] mb-2">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Read testimonials from students who have studied abroad with us
            </p>
          </div>
          
          <CommentCarousel />
        </div>
      </section>
    </div>
  )
}
