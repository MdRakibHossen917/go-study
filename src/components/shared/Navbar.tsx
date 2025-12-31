"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, Facebook, Youtube, Instagram, Mail, Globe, BookOpen, Calendar, Settings, Info, MessageCircle, FileText } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import imageUniOne from "@/assests/Image/imageUniOne.jpg"
import imageUniTwo from "@/assests/Image/imageUniTwo.jpg"
import imageUniThree from "@/assests/Image/imageUniThree.jpg"
import subjectImageOne from "@/assests/Image/subjectImageOne.jpg"
import worksImageOne from "@/assests/Image/worksImageOne.jpg"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const destinationImages = [imageUniOne, imageUniTwo, imageUniThree]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isHovering) {
      interval = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % destinationImages.length)
          setIsTransitioning(false)
        }, 500)
      }, 2000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isHovering, destinationImages.length])

  // Handle page shift when mobile menu is open
  useEffect(() => {
    const mainContent = document.querySelector('main')
    const footer = document.querySelector('footer')
    const navbar = document.querySelector('nav')
    
    // Always set transition for smooth animation
    if (mainContent) {
      mainContent.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      mainContent.style.willChange = 'transform'
    }
    if (footer) {
      footer.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      footer.style.willChange = 'transform'
    }
    if (navbar) {
      navbar.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      navbar.style.willChange = 'transform'
    }
    
    if (isMobileMenuOpen) {
      if (mainContent) {
        mainContent.style.transform = 'translateX(80%)'
      }
      if (footer) {
        footer.style.transform = 'translateX(80%)'
      }
      if (navbar) {
        navbar.style.transform = 'translateX(80%)'
      }
      document.documentElement.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
      document.body.style.overflowX = 'hidden'
    } else {
      if (mainContent) {
        mainContent.style.transform = 'translateX(0)'
      }
      if (footer) {
        footer.style.transform = 'translateX(0)'
      }
      if (navbar) {
        navbar.style.transform = 'translateX(0)'
      }
      document.documentElement.style.overflow = ''
      document.documentElement.style.overflowX = ''
      document.body.style.overflowX = ''
    }
    return () => {
      if (mainContent) {
        mainContent.style.transform = ''
        mainContent.style.transition = ''
        mainContent.style.willChange = ''
      }
      if (footer) {
        footer.style.transform = ''
        footer.style.transition = ''
        footer.style.willChange = ''
      }
      if (navbar) {
        navbar.style.transform = ''
        navbar.style.transition = ''
        navbar.style.willChange = ''
      }
      document.documentElement.style.overflow = ''
      document.documentElement.style.overflowX = ''
      document.body.style.overflowX = ''
    }
  }, [isMobileMenuOpen])
  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-[80%] bg-[#0D9488] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="h-full flex flex-col">
          {/* Mobile Navigation Menu */}
          <div className="flex-1 overflow-y-auto py-4 pt-[100px]">
            <Link
              href="/destinations"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Globe className="h-5 w-5" />
              DESTINATIONS
            </Link>

            <Link
              href="/subjects"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              SUBJECTS
            </Link>

            <Link
              href="/terms"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              TERMS
            </Link>

            <Link
              href="/how-it-works"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Settings className="h-5 w-5" />
              HOW IT WORKS
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Info className="h-5 w-5" />
              ABOUT
            </Link>

            <Link
              href="/search"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              SEARCH
            </Link>

            <Link
              href="/inquire"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle className="h-5 w-5" />
              INQUIRE
            </Link>

            <Link
              href="/apply"
              className="flex items-center gap-3 py-3 px-4 text-white text-sm font-semibold uppercase border-b border-teal-600/50 hover:bg-teal-600/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileText className="h-5 w-5" />
              APPLY
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="py-6 px-4 border-t border-teal-600/50">
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5 text-[#0D9488] group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="mailto:info@gostudy.com"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-teal-600/50 transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-[#0D9488] group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay - Click to close menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ left: '80%' }}
        />
      )}

      {/* Desktop Navbar */}
      <nav className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative md:relative fixed bottom-0 md:bottom-auto md:top-0 z-30 border-t md:border-t-0 md:border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left side - Brand name */}
            <Link href="/" className="flex items-center">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">GoStudy</h1>
            </Link>

            {/* Middle - Navigation items (hidden on mobile) */}
            <NavigationMenu viewport={false} className="hidden md:flex w-full">
            <NavigationMenuList>
              {/* Destinations */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base">DESTINATIONS</NavigationMenuTrigger>
                <NavigationMenuContent 
                  className="group-data-[viewport=false]/navigation-menu:!left-0 group-data-[viewport=false]/navigation-menu:!right-0 group-data-[viewport=false]/navigation-menu:!w-screen group-data-[viewport=false]/navigation-menu:!max-w-none group-data-[viewport=false]/navigation-menu:!fixed group-data-[viewport=false]/navigation-menu:!inset-x-0 group-data-[viewport=false]/navigation-menu:!top-16"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="w-full">
                    <div className="max-w-7xl mx-auto px-4 py-4">
                      <div className="flex gap-4">
                        {/* Left side - Image (1/4 width) */}
                        <div className="w-1/4 relative min-h-[200px] overflow-hidden rounded">
                          <div className="relative w-full h-full">
                            {destinationImages.map((image, index) => {
                              const isActive = index === currentImageIndex
                              const isNext = index === (currentImageIndex + 1) % destinationImages.length
                              const isPrev = index === (currentImageIndex - 1 + destinationImages.length) % destinationImages.length
                              
                              let translateX = '100%'
                              if (isActive) {
                                translateX = isTransitioning ? '-100%' : '0%'
                              } else if (isNext && isTransitioning) {
                                translateX = '0%'
                              } else if (isPrev && !isTransitioning) {
                                translateX = '-100%'
                              }
                              
  return (
                                <Image
                                  key={index}
                                  src={image}
                                  alt={`Study Abroad Destinations ${index + 1}`}
                                  fill
                                  className={`object-cover absolute inset-0 transition-transform duration-500 ease-in-out ${
                                    isActive || (isNext && isTransitioning) ? 'z-10' : 'z-0'
                                  }`}
                                  style={{
                                    transform: `translateX(${translateX})`,
                                  }}
                                  sizes="25vw"
                                />
                              )
                            })}
                          </div>
                        </div>
                        {/* Right side - Continents (3/4 width) */}
                        <div className="w-3/4 mt-4">
                          <div className="grid grid-cols-5 gap-4">
                      {/* Asia */}
                      <div className="space-y-2 group">
                        <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                          <span>ASIA</span>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/japan" className="block text-xs sm:text-sm hover:text-primary py-1  ">
                            Japan
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/china" className="block text-sm hover:text-primary py-1 ">
                            China
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/south-korea" className="block text-sm hover:text-primary py-1 ">
                            South Korea
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Europe */}
                      <div className="space-y-2 group">
                        <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                          <span>EUROPE</span>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/united-kingdom" className="block text-sm hover:text-primary py-1 ">
                            United Kingdom
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/france" className="block text-sm hover:text-primary py-1 ">
                            France
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/germany" className="block text-sm hover:text-primary py-1 ">
                            Germany
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/italy" className="block text-sm hover:text-primary py-1 ">
                            Italy
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* North America */}
                      <div className="space-y-2 group">
                        <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                          <span>NORTH AMERICA</span>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/united-states" className="block text-sm hover:text-primary py-1 ">
                            United States
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/canada" className="block text-sm hover:text-primary py-1 ">
                            Canada
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/mexico" className="block text-sm hover:text-primary py-1 ">
                            Mexico
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/costa-rica" className="block text-sm hover:text-primary py-1 ">
                            Costa Rica
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* South America */}
                      <div className="space-y-2 group">
                        <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                          <span>SOUTH AMERICA</span>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/argentina" className="block text-sm hover:text-primary py-1 ">
                            Argentina
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/brazil" className="block text-sm hover:text-primary py-1 ">
                            Brazil
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/chile" className="block text-sm hover:text-primary py-1 ">
                            Chile
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/colombia" className="block text-sm hover:text-primary py-1 ">
                            Colombia
                          </Link>
                        </NavigationMenuLink>
                      </div>

                      {/* Oceania */}
                      <div className="space-y-2 group">
                        <div className="flex items-center gap-1 font-semibold text-sm mb-2">
                          <span>OCEANIA</span>
                        </div>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/australia" className="block text-sm hover:text-primary py-1 ">
                            Australia
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/destinations/new-zealand" className="block text-sm hover:text-primary py-1 ">
                            New Zealand
                          </Link>
                        </NavigationMenuLink>
                      </div>

                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Subjects */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base">SUBJECTS</NavigationMenuTrigger>
                <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!left-0 group-data-[viewport=false]/navigation-menu:!right-0 group-data-[viewport=false]/navigation-menu:!w-screen group-data-[viewport=false]/navigation-menu:!max-w-none group-data-[viewport=false]/navigation-menu:!fixed group-data-[viewport=false]/navigation-menu:!inset-x-0 group-data-[viewport=false]/navigation-menu:!top-16">
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-4">
                      {/* Left side - Image (1/4 width) */}
                      <div className="w-1/4 relative min-h-[400px]">
                        <Image
                          src={subjectImageOne}
                          alt="Study Subjects"
                          fill
                          className="object-cover rounded-md"
                          sizes="25vw"
                        />
                      </div>
                      {/* Right side - Subjects (3/4 width) */}
                      <div className="w-3/4">
                        <div className="grid grid-cols-3 gap-4 py-4">
                          {/* Column 1 */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">ENGINEERING</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/art-design" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Art & Design
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/business-economics" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Business & Economics
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/communications" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Communications
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/education" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Education
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/engineering" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Engineering
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          {/* Column 2 */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">SCIENCES</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/health" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Health
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/humanities" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Humanities
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/international-studies" className="block text-xs sm:text-sm hover:text-primary py-1">
                                International Studies
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/math" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Math
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/natural-applied-sciences" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Natural & Applied Sciences
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          {/* Column 3 */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">SOCIAL & CULTURAL</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/social-sciences" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Social Sciences
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/tourism-hospitality" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Tourism and Hospitality
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/visual-performing-arts" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Visual and Performing Arts
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/subjects/world-languages" className="block text-xs sm:text-sm hover:text-primary py-1">
                                World Languages
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Terms */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base">TERMS</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <div className="space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/terms/academic-year" className="block text-xs sm:text-sm hover:text-primary">
                          Academic Year
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/fall-semester" className="block text-sm hover:text-primary">
                          Fall Semester
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/spring-semester" className="block text-sm hover:text-primary">
                          Spring Semester
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/summer-break" className="block text-sm hover:text-primary">
                          Summer Break
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/terms/winter-break" className="block text-sm hover:text-primary">
                          Winter Break
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* How It Works */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base">HOW IT WORKS</NavigationMenuTrigger>
                <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:!left-0 group-data-[viewport=false]/navigation-menu:!right-0 group-data-[viewport=false]/navigation-menu:!w-screen group-data-[viewport=false]/navigation-menu:!max-w-none group-data-[viewport=false]/navigation-menu:!fixed group-data-[viewport=false]/navigation-menu:!inset-x-0 group-data-[viewport=false]/navigation-menu:!top-16">
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-4">
                      {/* Left side - Image (1/4 width) */}
                      <div className="w-1/4 relative min-h-[400px]">
                        <Image
                          src={worksImageOne}
                          alt="How It Works"
                          fill
                          className="object-cover rounded-md"
                          sizes="25vw"
                        />
                      </div>
                      {/* Right side - Content (3/4 width) */}
                      <div className="w-3/4">
                        <div className="grid grid-cols-4 gap-4 py-4">
                          {/* Column 1 - HOW IT WORKS */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">HOW IT WORKS</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/pick-program" className="block text-xs sm:text-sm hover:text-primary py-1">
                                How to Pick a Program
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/apply" className="block text-xs sm:text-sm hover:text-primary py-1">
                                How to Apply
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/costs-deadlines" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Costs and Deadlines
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/online-application" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Online Application
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          {/* Column 2 - AFTER APPLYING */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">AFTER APPLYING</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/what-to-expect" className="block text-xs sm:text-sm hover:text-primary py-1">
                                What to Expect After Applying
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/what-you-get" className="block text-xs sm:text-sm hover:text-primary py-1">
                                What You Get
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/what-youll-need" className="block text-xs sm:text-sm hover:text-primary py-1">
                                What You&apos;ll Need
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/cancellation-policy" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Cancellation Policy
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          {/* Column 3 - THINGS YOU'LL NEED */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">THINGS YOU&apos;LL NEED</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/pre-departure-checklist" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Pre-Departure Checklist
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/passport" className="block text-xs sm:text-sm hover:text-primary py-1">
                                How to Get a Passport
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/visa" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Visa Information
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/flights" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Booking Flights
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/travel-insurance" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Travel Insurance
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/traveler-guide" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Traveler Guide
                              </Link>
                            </NavigationMenuLink>
                          </div>
                          {/* Column 4 - FUNDING YOUR PROGRAM */}
                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs sm:text-sm mb-2">FUNDING YOUR PROGRAM</h4>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/what-youre-paying-for" className="block text-xs sm:text-sm hover:text-primary py-1">
                                What You&apos;re Paying For
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/how-to-pay" className="block text-xs sm:text-sm hover:text-primary py-1">
                                How to Pay for Study abroad
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/scholarships" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Scholarships
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/grants" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Grants
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/financial-aid" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Paying with Financial Aid
                              </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                              <Link href="/how-it-works/crowdfunding" className="block text-xs sm:text-sm hover:text-primary py-1">
                                Crowdfunding Guide
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-left text-xs sm:text-sm md:text-base">ABOUT</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-4">
                    <div className="space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/about" className="block text-xs sm:text-sm hover:text-primary">
                          About goStudy
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/reviews" className="block text-xs sm:text-sm hover:text-primary">
                          Study Abroad Reviews
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/health-safety" className="block text-xs sm:text-sm hover:text-primary">
                          Health & Safety Abroad
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/blogs" className="block text-xs sm:text-sm hover:text-primary">
                          Blogs and Resources
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/about/faq" className="block text-xs sm:text-sm hover:text-primary">
                          FAQs
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/contact" className="block text-xs sm:text-sm hover:text-primary">
                          Contact Us
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side - Action buttons (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              <Search className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">SEARCH</span>
            </Button>
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              <span className="hidden sm:inline">INQUERY</span>
              <span className="sm:hidden">INQ</span>
            </Button>
            <Button variant="default" size="sm" className="text-xs sm:text-sm">
              APPLY
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar