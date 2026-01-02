"use client"

import React, { useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const reviews = [
  {
    rating: "5.0",
    text: "Studying in Japan was the best decision I ever made! The combination of cutting-edge technology education and rich cultural experiences was incredible. The universities are world-class, and the people are so welcoming and friendly.",
    initials: "SM",
    name: "Sarah M.",
    role: "Engineering Student, Tokyo",
  },
  {
    rating: "5.0",
    text: "The academic rigor and cultural immersion in Japan exceeded all my expectations. Learning Japanese while studying business gave me a unique edge in my career. The safety and cleanliness made it perfect for international students like me.",
    initials: "JD",
    name: "James D.",
    role: "Business Student, Osaka",
  },
  {
    rating: "5.0",
    text: "Japan's blend of tradition and innovation is unmatched. From ancient temples to high-tech labs, every day was an adventure. The support from the university and study abroad program was exceptional throughout my entire journey.",
    initials: "EM",
    name: "Emma L.",
    role: "Arts Student, Kyoto",
  },
  {
    rating: "5.0",
    text: "The quality of education in Japan is outstanding, and the cultural experiences are life-changing. I made lifelong friends and gained skills that have been invaluable in my career. Highly recommend studying abroad in Japan to everyone!",
    initials: "RK",
    name: "Ryan K.",
    role: "Technology Student, Tokyo",
  },
  {
    rating: "5.0",
    text: "My experience studying in Japan was transformative. The blend of modern technology and traditional culture created a unique learning environment. The professors were incredibly supportive and the campus facilities were absolutely world-class and modern.",
    initials: "AL",
    name: "Alex L.",
    role: "Computer Science Student, Tokyo",
  },
  {
    rating: "5.0",
    text: "Japan offered me an incredible opportunity to grow both academically and personally. The language courses were excellent, and I quickly adapted to the culture. The study abroad program provided amazing support throughout my entire journey there.",
    initials: "MJ",
    name: "Maria J.",
    role: "Language Studies, Osaka",
  },
  {
    rating: "5.0",
    text: "Studying in Japan exceeded all my expectations. The education system is rigorous yet supportive, and I learned so much about Japanese culture and business practices. This experience has been truly invaluable for my career development and growth.",
    initials: "DT",
    name: "David T.",
    role: "Business Student, Kyoto",
  },
  {
    rating: "5.0",
    text: "The study abroad program in Japan was absolutely fantastic. I made amazing friends, learned a new language, and gained international experience that has set me apart in job interviews. Highly recommend this program to all students!",
    initials: "LS",
    name: "Lisa S.",
    role: "International Studies, Tokyo",
  },
]

// Function to truncate text to 40 words
const truncateToWords = (text: string, maxWords: number = 40): string => {
  const words = text.split(" ")
  if (words.length <= maxWords) {
    return text
  }
  return words.slice(0, maxWords).join(" ") + "..."
}

export function ReviewsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-scroll from left to right (marquee style)
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext() // Scroll from left to right
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/4">
            <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Rating Section */}
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm font-medium text-muted-foreground">{review.rating}</span>
              </div>
              
              {/* Review Text - Larger font size */}
              <p className="text-foreground mb-6 text-base leading-relaxed flex-grow">
                "{truncateToWords(review.text, 40)}"
              </p>
              
              {/* Author Section */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{review.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{review.role}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

