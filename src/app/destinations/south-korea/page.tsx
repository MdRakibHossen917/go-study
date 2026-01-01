import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import southKoreaImage from "@/assests/Image/southKoreaImage.jpg"

export const metadata: Metadata = {
  title: "Study in South Korea - AbroadGuideBD",
  description: "Discover study abroad opportunities in South Korea. Explore top universities and programs in South Korea.",
}

export default function SouthKoreaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[82vh]">
        <Image
          src={southKoreaImage}
          alt="Beautiful landscape of South Korea"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              SOUTH KOREA
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Study Abroad in South Korea
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Innovative. Dynamic. Cultural.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-background border-b border-border sticky top-16 z-20">
        <div className="max-w-6xl mx-auto">
          <nav className="flex overflow-x-auto">
            <a href="#overview" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              OVERVIEW
            </a>
            <a href="#reviews" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              REVIEWS
            </a>
            <a href="#programs" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              PROGRAMS
            </a>
            <a href="#activities" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              ACTIVITIES
            </a>
            <a href="#how-to-apply" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              HOW TO APPLY
            </a>
            <a href="#faqs" className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary whitespace-nowrap">
              FAQS
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">|</span>
          <span>Study Abroad in South Korea</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What to expect when you Study Abroad in South Korea
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Studying abroad in South Korea offers a unique blend of cutting-edge technology, 
                  K-pop culture, and world-class education. Expect to immerse yourself in a culture 
                  that seamlessly combines innovation with rich traditional heritage.
                </p>
                <p>
                  You'll experience life in one of Asia's most technologically advanced countries, 
                  from bustling Seoul to historic cities like Busan and Gyeongju. South Korean 
                  universities are globally recognized for their excellence in technology, engineering, 
                  business, and the arts.
                </p>
                <p>
                  The opportunity to learn Korean, explore stunning natural landscapes, experience 
                  vibrant K-pop and entertainment culture, and engage with a welcoming community will 
                  enhance your academic journey. Be prepared for an adventure that combines rigorous 
                  academics with unforgettable cultural experiences and personal growth!
                </p>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button size="lg" className="w-full sm:w-auto">
                    APPLY NOW
                  </Button>
                </Link>
                <Link href="/inquiry">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    GET MORE INFO
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li>
                    <strong>Language:</strong> Korean (English programs available)
                  </li>
                  <li>
                    <strong>Currency:</strong> South Korean Won (KRW)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> KST (UTC+9)
                  </li>
                  <li>
                    <strong>Climate:</strong> Temperate with four distinct seasons
                  </li>
                  <li>
                    <strong>Technology:</strong> World's fastest internet and tech infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Student Reviews
          </h2>
          <p className="text-muted-foreground mb-8">
            Hear from students who have studied abroad in South Korea and transformed their lives through 
            this incredible experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "Studying in South Korea was incredible! The technology and innovation here are 
                world-class, and experiencing K-pop culture firsthand was amazing. The universities 
                have excellent facilities and the people are so friendly."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">JH</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jessica H.</p>
                  <p className="text-sm text-muted-foreground">Technology Student, Seoul</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "The combination of cutting-edge technology education and vibrant K-pop culture made 
                my study abroad experience unforgettable. Learning Korean while studying business gave 
                me unique career opportunities."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">BP</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Brian P.</p>
                  <p className="text-sm text-muted-foreground">Business Student, Busan</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "South Korea's safe environment and modern infrastructure made it perfect for 
                international students. The academic programs are rigorous, and the cultural 
                experiences from K-dramas to traditional palaces were incredible."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">SN</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sophie N.</p>
                  <p className="text-sm text-muted-foreground">Arts Student, Seoul</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "The world's fastest internet and advanced technology in South Korea provided an 
                amazing learning environment. The blend of traditional culture and modern innovation 
                is unique. I highly recommend studying here!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">TW</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Tom W.</p>
                  <p className="text-sm text-muted-foreground">Engineering Student, Seoul</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our South Korea Study Abroad Programs
          </h2>
          <p className="text-muted-foreground mb-6">
            Discover innovative programs, cultural immersion, and academic excellence through 
            our study abroad opportunities in South Korea.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Technology & IT Programs
              </h3>
              <p className="text-muted-foreground mb-4">
                Study at top technology universities with state-of-the-art facilities and 
                cutting-edge research in IT, engineering, and innovation.
              </p>
              <p className="text-sm text-foreground font-medium">
                Available Terms: Fall Semester, Spring Semester, Academic Year
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Business & Economics Programs
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn from leading business schools and gain insights into South Korea's global 
                economy, chaebol system, and business practices.
              </p>
              <p className="text-sm text-foreground font-medium">
                Available Terms: Fall Semester, Spring Semester, Academic Year
              </p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What to do in South Korea in your free time
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover South Korea by exploring ancient palaces, experiencing K-pop culture, 
            enjoying delicious cuisine, and visiting stunning natural and modern landscapes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Explore Ancient Palaces and Temples
              </h3>
              <p className="text-foreground">
                Visit historic sites like Gyeongbokgung Palace in Seoul, Bulguksa Temple in Gyeongju, 
                and traditional hanok villages. Experience Korea's rich history and traditional architecture.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Experience K-Pop and Entertainment Culture
              </h3>
              <p className="text-foreground">
                Attend K-pop concerts, visit entertainment districts like Gangnam, explore K-drama 
                filming locations, and immerse yourself in Korea's vibrant pop culture scene.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Enjoy Korean Cuisine
              </h3>
              <p className="text-foreground">
                From kimchi and bulgogi to Korean BBQ and street food, explore Korea's incredible 
                food scene. Experience everything from traditional dishes to modern fusion cuisine.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Visit Modern Cities and Natural Beauty
              </h3>
              <p className="text-foreground">
                Experience futuristic Seoul, relax in natural hot springs (jjimjilbang), visit 
                beautiful islands like Jeju, and see the contrast between ancient traditions and 
                modern innovation.
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="how-to-apply" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            How to Apply
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded p-6">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Confirm your program of interest
              </h3>
              <p className="text-muted-foreground">
                Browse our available programs and select the one that matches your academic goals.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Submit your completed application form
              </h3>
              <p className="text-muted-foreground">
                Fill out the application with all required documents and information.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Speak to one of our study abroad experts
              </h3>
              <p className="text-muted-foreground">
                Our advisors will guide you through the process and answer any questions.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Wait for program acceptance
              </h3>
              <p className="text-muted-foreground">
                Receive confirmation and prepare for your study abroad journey.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Pay your program deposit
              </h3>
              <p className="text-muted-foreground">
                Secure your spot by completing the payment process.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Get ready for the experience of a lifetime!
              </h3>
              <p className="text-muted-foreground">
                Prepare for your adventure and start your journey to South Korea.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Study Abroad in South Korea FAQs
          </h2>
          <p className="text-muted-foreground mb-6">
            Got questions about studying abroad in South Korea? Get all the answers you need to 
            kickstart your journey with confidence!
          </p>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are the benefits of studying abroad in South Korea?
              </h3>
              <p className="text-foreground">
                Studying in South Korea offers access to world-class universities, cutting-edge 
                technology, and vibrant K-pop culture. You'll learn in one of Asia's most 
                technologically advanced countries while gaining valuable Korean language skills 
                and global perspectives that enhance your career prospects.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are the costs associated with studying in South Korea?
              </h3>
              <p className="text-foreground">
                Costs include tuition fees, which are generally competitive compared to Western 
                countries. Living expenses in Seoul can be moderate, while other cities offer 
                more affordable options. Additional costs include visa fees, health insurance, 
                and personal expenses. Many scholarship programs are available for international 
                students.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do I need a student visa to study in South Korea?
              </h3>
              <p className="text-foreground">
                Yes, international students typically need a student visa (D-2 visa). The process 
                requires proof of enrollment, financial documentation, and a valid passport. Our 
                advisors will guide you through the visa application process.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What should I know about living in South Korea as an international student?
              </h3>
              <p className="text-foreground">
                South Korea offers excellent public transportation, safe cities, and a high quality 
                of life. While Korean is the primary language, many universities offer English-taught 
                programs. Be prepared for cultural differences, seasonal weather changes, and the 
                opportunity to experience K-pop culture, delicious cuisine, and one of the world's 
                most technologically advanced societies.
              </p>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Get more information
            </h2>
            <p className="text-muted-foreground mb-6">
              Craving more info? Discover how you can start your epic study abroad journey.
            </p>
            <Link href="/inquiry">
              <Button size="lg" className="w-full sm:w-auto">
                SEND ME THE INFO!
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
