import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import chinaImage from "@/assests/Image/chinaImage.jpg"

export const metadata: Metadata = {
  title: "Study in China - AbroadGuideBD",
  description: "Discover study abroad opportunities in China. Explore top universities and programs in China.",
}

export default function ChinaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Image Header */}
      <div className="relative w-full h-[82vh]">
        <Image
          src={chinaImage}
          alt="Beautiful landscape of China"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h4 className="text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
              CHINA
            </h4>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Study Abroad in China
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Affordable. Cultural. Dynamic.
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
          <span>Study Abroad in China</span>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What to expect when you Study Abroad in China
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Studying abroad in China offers a unique opportunity to experience one of the 
                  world's oldest civilizations while accessing modern, rapidly growing universities. 
                  Expect to immerse yourself in a culture that blends ancient traditions with 
                  cutting-edge innovation.
                </p>
                <p>
                  You'll experience life in a country with a booming economy, from bustling 
                  megacities like Beijing and Shanghai to historic cultural centers. Chinese 
                  universities are increasingly recognized globally for their excellence in business, 
                  engineering, technology, and traditional medicine.
                </p>
                <p>
                  The opportunity to learn Mandarin Chinese, explore stunning landscapes from the 
                  Great Wall to modern skylines, and engage with a diverse, welcoming community 
                  will enhance your academic journey. Be prepared for an adventure that combines 
                  affordable education with unforgettable cultural experiences and career opportunities!
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
                    <strong>Language:</strong> Mandarin Chinese (English programs available)
                  </li>
                  <li>
                    <strong>Currency:</strong> Chinese Yuan (CNY)
                  </li>
                  <li>
                    <strong>Time Zone:</strong> CST (UTC+8)
                  </li>
                  <li>
                    <strong>Climate:</strong> Varied - from temperate to subtropical
                  </li>
                  <li>
                    <strong>Economy:</strong> World's second-largest economy
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
            Hear from students who have studied abroad in China and transformed their lives through 
            this incredible experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "Studying in China was an amazing experience! The affordable tuition and high-quality 
                education made it perfect for me. Learning Mandarin while studying business opened 
                so many doors for my career."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">LW</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Lisa W.</p>
                  <p className="text-sm text-muted-foreground">Business Student, Beijing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "The cultural immersion in China was incredible. From visiting the Great Wall to 
                experiencing traditional festivals, every moment was enriching. The universities 
                have modern facilities and excellent programs."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Michael C.</p>
                  <p className="text-sm text-muted-foreground">Engineering Student, Shanghai</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "China's growing economy and business opportunities made it the perfect choice for 
                my studies. The combination of affordable education and career prospects is unmatched. 
                I highly recommend studying in China!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">AS</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Anna S.</p>
                  <p className="text-sm text-muted-foreground">Economics Student, Guangzhou</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-xl">★★★★★</div>
                <span className="text-sm text-muted-foreground">5.0</span>
              </div>
              <p className="text-foreground mb-4">
                "The rich cultural heritage and modern innovation in China created an incredible 
                learning environment. The support from the university and the study abroad program 
                helped me adapt quickly and make the most of my experience."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">DT</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">David T.</p>
                  <p className="text-sm text-muted-foreground">Technology Student, Shenzhen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our China Study Abroad Programs
          </h2>
          <p className="text-muted-foreground mb-6">
            Discover affordable programs, cultural immersion, and academic excellence through 
            our study abroad opportunities in China.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Business & Economics Programs
              </h3>
              <p className="text-muted-foreground mb-4">
                Study at leading business schools and gain insights into China's global economy 
                and business practices in the world's manufacturing hub.
              </p>
              <p className="text-sm text-foreground font-medium">
                Available Terms: Fall Semester, Spring Semester, Academic Year
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Engineering & Technology Programs
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn from top engineering universities with modern facilities and cutting-edge 
                research in technology and innovation.
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
            What to do in China in your free time
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover China by exploring ancient landmarks, experiencing traditional culture, 
            enjoying diverse cuisine, and visiting stunning natural and modern landscapes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Visit the Great Wall and Ancient Landmarks
              </h3>
              <p className="text-foreground">
                Explore the Great Wall of China, the Forbidden City in Beijing, the Terracotta 
                Army in Xi'an, and other UNESCO World Heritage sites that showcase China's 
                incredible history.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Experience Traditional Chinese Culture
              </h3>
              <p className="text-foreground">
                Participate in traditional tea ceremonies, watch Peking Opera, learn calligraphy 
                and martial arts, or visit ancient temples and gardens to immerse yourself in 
                Chinese traditions.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Enjoy Diverse Chinese Cuisine
              </h3>
              <p className="text-foreground">
                From regional specialties like Sichuan hot pot, Cantonese dim sum, and Beijing 
                duck to street food and fine dining, explore China's incredible culinary diversity.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Explore Modern Cities and Natural Beauty
              </h3>
              <p className="text-foreground">
                Experience futuristic skylines in Shanghai and Shenzhen, visit beautiful natural 
                landscapes like the Li River and Yellow Mountains, and see the contrast between 
                ancient and modern China.
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
                Prepare for your adventure and start your journey to China.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Study Abroad in China FAQs
          </h2>
          <p className="text-muted-foreground mb-6">
            Got questions about studying abroad in China? Get all the answers you need to 
            kickstart your journey with confidence!
          </p>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are the benefits of studying abroad in China?
              </h3>
              <p className="text-foreground">
                Studying in China offers affordable, high-quality education with rapidly growing 
                universities. You'll gain valuable Mandarin language skills, experience rich 
                cultural heritage, and benefit from strong economic opportunities and career 
                prospects in a global market.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What are the costs associated with studying in China?
              </h3>
              <p className="text-foreground">
                Costs include tuition fees, which are generally more affordable than many Western 
                countries. Living expenses vary by city but are typically lower than in Europe or 
                North America. Additional costs include visa fees, health insurance, and personal 
                expenses. Many scholarship programs are available for international students.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do I need a student visa to study in China?
              </h3>
              <p className="text-foreground">
                Yes, international students typically need a student visa (X1 or X2 visa). The 
                process requires proof of enrollment, financial documentation, and a valid passport. 
                Our advisors will guide you through the visa application process.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What should I know about living in China as an international student?
              </h3>
              <p className="text-foreground">
                China offers diverse experiences from bustling megacities to historic cultural centers. 
                While Mandarin is the primary language, many universities offer English-taught programs. 
                Be prepared for cultural differences, varied climates across regions, and the opportunity 
                to experience one of the world's most dynamic and rapidly developing countries.
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
