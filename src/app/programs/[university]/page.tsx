import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, DollarSign, GraduationCap, MapPin, Clock, Users, Award, Globe, Building2, BookOpen, Heart, Download, FileText, Phone, Sparkles, ArrowRight } from "lucide-react"
import universityTokyo from "@/assests/UniversityFreeImage/universityTokyo.jpg"
import wasedaUniversity from "@/assests/UniversityFreeImage/wasedaUniversity.jpg"
import kyotoUniversity from "@/assests/UniversityFreeImage/kyotoUniversity.jpg"
import campusFriends from "@/assests/UniversityFreeSubImage/campusFriendsCulturalsProgram.jpg"
import friendshipToCampus from "@/assests/UniversityFreeSubImage/friendshipToCampus.jpg"
import lectureCollege from "@/assests/UniversityFreeSubImage/lecture-college.jpg"
import examTimeGroupStudy from "@/assests/UniversityFreeSubImage/examTimeGroupStudy.jpg"
import basketballGame from "@/assests/UniversityMiniCardImage/basketball-game.jpg"
import universityCafeteria from "@/assests/UniversityMiniCardImage/universityCafeteria.jpg"
import universityClassRoom from "@/assests/UniversityMiniCardImage/universityClassRoom.jpg"
import datesAd from "@/assests/AdvertisementImage/dates.jpg"
import tokyoOne from "@/assests/UniversityCampus/tokyoOne.jpg"
import tokyoTwo from "@/assests/UniversityCampus/tokyotwo.jpg"
import imageUniOne from "@/assests/Image/imageUniOne.jpg"
import { ClassroomCard } from "@/components/classroom-card"
import { HeroImageGallery } from "@/components/hero-image-gallery"

type ProgramData = {
  id: string
  title: string
  university: string
  image: typeof universityTokyo
  description: string
  fee: string
  semesters: string[]
  slug: string
  location?: string
  duration?: string
  language?: string
  highlights?: string[]
  requirements?: string[]
  additionalImages?: typeof universityTokyo[]
  detailedDescription?: string
  courses?: string[]
  facilities?: string[]
  studentLife?: string[]
}

const programs: ProgramData[] = [
  {
    id: "engineering",
    title: "Engineering & Technology Programs",
    university: "University of Tokyo",
    image: universityTokyo,
    description: "Study at top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in Japan's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.",
    detailedDescription: "The University of Tokyo offers an exceptional study abroad experience in engineering and technology. Our programs provide students with access to world-renowned faculty, cutting-edge research facilities, and industry connections that set the foundation for a successful career.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "university-of-tokyo",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    additionalImages: [campusFriends, friendshipToCampus, lectureCollege, examTimeGroupStudy],
    highlights: [
      "World-class research facilities and laboratories",
      "Industry partnerships with leading tech companies like Sony, Toyota, and Panasonic",
      "Internship opportunities with top Japanese corporations",
      "Cutting-edge laboratories with advanced equipment",
      "Expert faculty members from global institutions",
      "Global networking opportunities and career development",
      "Innovative research projects and publication opportunities"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Relevant academic background in engineering or related fields",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Advanced Robotics and Automation",
      "Artificial Intelligence and Machine Learning",
      "Sustainable Energy Systems",
      "Biomedical Engineering",
      "Computer Science and Software Engineering",
      "Materials Science and Nanotechnology",
      "Electrical and Electronic Engineering",
      "Environmental Engineering"
    ],
    facilities: [
      "State-of-the-art research laboratories",
      "Modern library with extensive digital resources",
      "Computer labs with latest software and tools",
      "Student centers and study spaces",
      "Innovation hubs and collaborative workspaces",
      "Advanced computing and technology centers"
    ],
    studentLife: [
      "Join student clubs and organizations",
      "Participate in cultural festivals and events",
      "Explore Tokyo's famous neighborhoods and attractions",
      "Experience traditional Japanese tea ceremonies",
      "Weekend trips to nearby historical sites",
      "Language exchange programs with Japanese students"
    ]
  },
  {
    id: "business",
    title: "Business & Economics Programs",
    university: "Waseda University",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into Japan's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "waseda-university",
    location: "Tokyo, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "Top-ranked business school in Asia",
      "Corporate networking events",
      "Case study methodology",
      "Exchange programs with global partners",
      "Guest lectures from industry leaders",
      "Business simulation labs"
    ],
    requirements: [
      "Minimum GPA of 3.0",
      "English proficiency (TOEFL/IELTS)",
      "Business or related field background",
      "Valid passport and student visa"
    ]
  },
  {
    id: "arts",
    title: "Arts & Culture Programs",
    university: "Kyoto University",
    image: kyotoUniversity,
    description: "Explore Japan's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Kyoto while experiencing authentic Japanese culture, from tea ceremonies to contemporary art scenes.",
    fee: "$9,800",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "kyoto-university",
    location: "Kyoto, Japan",
    duration: "1-2 Semesters",
    language: "English & Japanese",
    highlights: [
      "Historical cultural immersion",
      "Traditional arts workshops",
      "Museum and gallery visits",
      "Cultural exchange programs",
      "Heritage site tours",
      "Creative project opportunities"
    ],
    requirements: [
      "Minimum GPA of 2.8",
      "English proficiency (TOEFL/IELTS)",
      "Interest in arts and culture",
      "Valid passport and student visa"
    ]
  },
  {
    id: "china-engineering",
    title: "Engineering & Technology Programs",
    university: "Tsinghua University",
    image: imageUniOne,
    description: "Study at one of China's top engineering universities with state-of-the-art facilities and cutting-edge research opportunities. Immerse yourself in China's world-renowned technology sector while experiencing the perfect blend of traditional culture and modern innovation.",
    detailedDescription: "Tsinghua University offers an exceptional study abroad experience in engineering and technology. Our programs provide students with access to world-renowned faculty, cutting-edge research facilities, and industry connections that set the foundation for a successful career.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "tsinghua-university",
    location: "Beijing, China",
    duration: "1-2 Semesters",
    language: "English & Mandarin",
    additionalImages: [campusFriends, friendshipToCampus, lectureCollege, examTimeGroupStudy],
    highlights: [
      "World-class research facilities and laboratories",
      "Industry partnerships with leading tech companies like Huawei, Alibaba, and Tencent",
      "Internship opportunities with top Chinese corporations",
      "Cutting-edge laboratories with advanced equipment",
      "Expert faculty members from global institutions",
      "Global networking opportunities and career development",
      "Innovative research projects and publication opportunities"
    ],
    requirements: [
      "Minimum GPA of 3.0 (on a 4.0 scale)",
      "English proficiency: TOEFL iBT 80+ or IELTS 6.5+",
      "Relevant academic background in engineering or related fields",
      "Valid passport and student visa (we assist with application)",
      "Statement of purpose and letters of recommendation",
      "Academic transcripts from current institution"
    ],
    courses: [
      "Advanced Robotics and Automation",
      "Artificial Intelligence and Machine Learning",
      "Sustainable Energy Systems",
      "Biomedical Engineering",
      "Computer Science and Software Engineering",
      "Materials Science and Nanotechnology",
      "Electrical and Electronic Engineering",
      "Environmental Engineering"
    ],
    facilities: [
      "State-of-the-art research laboratories",
      "Modern library with extensive digital resources",
      "Computer labs with latest software and tools",
      "Student centers and study spaces",
      "Innovation hubs and collaborative workspaces",
      "Advanced computing and technology centers"
    ],
    studentLife: [
      "Join student clubs and organizations",
      "Participate in cultural festivals and events",
      "Explore Beijing's famous neighborhoods and attractions",
      "Experience traditional Chinese tea ceremonies",
      "Weekend trips to nearby historical sites",
      "Language exchange programs with Chinese students"
    ]
  },
  {
    id: "china-business",
    title: "Business & Economics Programs",
    university: "Peking University",
    image: wasedaUniversity,
    description: "Learn from leading business schools and gain insights into China's global economy and business practices. Experience the unique corporate culture while studying in modern facilities with experienced faculty and industry connections.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "peking-university",
    location: "Beijing, China",
    duration: "1-2 Semesters",
    language: "English & Mandarin",
    highlights: [
      "Top-ranked business school in Asia",
      "Corporate networking events",
      "Case study methodology",
      "Exchange programs with global partners",
      "Guest lectures from industry leaders",
      "Business simulation labs"
    ],
    requirements: [
      "Minimum GPA of 3.0",
      "English proficiency (TOEFL/IELTS)",
      "Business or related field background",
      "Valid passport and student visa"
    ]
  },
  {
    id: "china-arts",
    title: "Arts & Culture Programs",
    university: "Fudan University",
    image: kyotoUniversity,
    description: "Explore China's rich cultural heritage through traditional arts, literature, and modern creative expressions. Study in historic Shanghai while experiencing authentic Chinese culture, from traditional opera to contemporary art scenes.",
    fee: "$8,500",
    semesters: ["FALL SEMESTER", "SPRING SEMESTER"],
    slug: "fudan-university",
    location: "Shanghai, China",
    duration: "1-2 Semesters",
    language: "English & Mandarin",
    highlights: [
      "Historical cultural immersion",
      "Traditional arts workshops",
      "Museum and gallery visits",
      "Cultural exchange programs",
      "Heritage site tours",
      "Creative project opportunities"
    ],
    requirements: [
      "Minimum GPA of 2.8",
      "English proficiency (TOEFL/IELTS)",
      "Interest in arts and culture",
      "Valid passport and student visa"
    ]
  }
]

export async function generateMetadata({ params }: { params: Promise<{ university: string }> }): Promise<Metadata> {
  const { university } = await params
  const program = programs.find(p => p.slug === university)
  
  if (!program) {
    return {
      title: "Program Not Found - AbroadGuideBD",
    }
  }

  return {
    title: `${program.title} - ${program.university} - AbroadGuideBD`,
    description: program.description,
  }
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ university: string }> }) {
  const { university } = await params
  const program = programs.find(p => p.slug === university)

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Program Not Found</h1>
          <Link href="/destinations/japan">
            <Button>Go Back to Japan Programs</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/destinations/japan#programs">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Program Image with Gallery */}
            <HeroImageGallery
              mainImage={program.image}
              thumbnailImages={
                program.university === "Tsinghua University"
                  ? [
                      { image: imageUniOne, name: "Science Building" },
                      { image: tokyoTwo, name: "Arts Building" }
                    ]
                  : [
                      { image: tokyoOne, name: "Science Building" },
                      { image: tokyoTwo, name: "Arts Building" }
                    ]
              }
            />

          {/* Quick Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg h-full">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {program.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <p className="text-lg font-medium">{program.university}</p>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4 mb-6">
                {program.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{program.location}</span>
                  </div>
                )}
                {program.duration && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{program.duration}</span>
                  </div>
                )}
                {program.language && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{program.language}</span>
                  </div>
                )}
              </div>

              {/* Program Fee */}
              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold text-muted-foreground">Program Fee</h3>
                </div>
                <p className="text-3xl font-bold text-primary">{program.fee}</p>
              </div>

              {/* Available Semesters */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Available Semesters</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {program.semesters.map((semester, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded"
                    >
                      {semester}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Link href="/apply" className="w-full">
                  <Button size="lg" className="w-full">
                    Apply Now
                  </Button>
                </Link>
                <Link href="/inquiry" className="w-full">
                  <Button variant="outline" size="lg" className="w-full">
                    Inquire Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Program Overview - Full Width */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Program Overview
              </h2>
              <p className="text-foreground leading-relaxed text-base md:text-lg mb-4">
                {program.description}
              </p>
              {program.detailedDescription && (
                <p className="text-foreground leading-relaxed text-base md:text-lg">
                  {program.detailedDescription}
                </p>
              )}
            </div>

            {/* Program Highlights and Campus Facilities - Side by Side on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Program Highlights */}
              {program.highlights && program.highlights.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Program Highlights
                  </h2>
                  <ul className="space-y-3">
                    {program.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Right Side - Campus Facilities */}
              {program.facilities && program.facilities.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    Campus Facilities
                  </h2>
                  <div className="grid grid-cols-1 gap-3">
                    {program.facilities.map((facility, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-foreground">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Exam Time Section */}
            {program.additionalImages && program.additionalImages.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 mt-2 underline">
                  <Building2 className="h-6 w-6 text-primary" />
                  Exam Time
                </h2>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
                  <Image
                    src={examTimeGroupStudy}
                    alt={`${program.university} exam time`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            )}

            {/* Student Life */}
            {program.studentLife && program.studentLife.length > 0 && (
              <div className="bg-card border border-border rounded p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Student Life & Activities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {program.studentLife.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admission Requirements */}
            {program.requirements && program.requirements.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">Admission Requirements</h2>
                <ul className="space-y-3">
                  {program.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Additional Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sports & Recreation Card - Sticky on Desktop */}
            <div className="lg:sticky lg:top-24">
              <ClassroomCard
                image={program.location?.includes("China") ? basketballGame : universityClassRoom}
                title={program.location?.includes("China") ? "Sports & Recreation" : "Modern Classroom"}
                description={program.location?.includes("China") ? "Experience world-class sports facilities with modern basketball courts, fitness centers, and recreational areas. Our state-of-the-art sports facilities are designed to promote physical wellness, team building, and active campus life for students." : "Experience cutting-edge learning environments with state-of-the-art technology, interactive whiteboards, and comfortable seating. Our modern classrooms are designed to enhance your educational experience with advanced audio-visual systems and flexible layouts."}
                className="mb-6"
              />
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Our advisors are here to assist you with any questions about this program.
              </p>
              <Link href="/inquiry" className="w-full">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Additional Info Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Important Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-1">Application Deadline</p>
                  <p className="text-muted-foreground">Rolling admission - Apply early</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Visa Processing</p>
                  <p className="text-muted-foreground">We assist with student visa application</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Support Services</p>
                  <p className="text-muted-foreground">24/7 assistance during your stay</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-card border border-border rounded p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/apply" className="flex items-center gap-3 p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Apply Now</span>
                </Link>
                <Link href="/downloads" className="flex items-center gap-3 p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                  <Download className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Download Brochure</span>
                </Link>
                <Link href="/inquiry" className="flex items-center gap-3 p-3 bg-muted/50 hover:bg-muted rounded-lg transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Schedule a Call</span>
                </Link>
              </div>
            </div>

            {/* News Card - Campus Cafeteria */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-48 overflow-hidden group">
                <Image
                  src={universityCafeteria}
                  alt="Campus Cafeteria"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>January 15, 2025</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  New Campus Cafeteria Opening
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Experience diverse cuisine options at our newly renovated cafeteria with modern facilities and healthy meal choices.
                </p>
              </div>
            </div>

            {/* Brand Promotion Advertisement Card */}
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group relative">
              {/* Premium Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  PREMIUM
                </div>
              </div>

              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={datesAd}
                  alt="Brand Promotion Advertisement"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="p-6 bg-gradient-to-b from-background to-background/95">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">Limited Edition</p>
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground mb-3 leading-tight">
                    Premium Dates Collection
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                    Discover our finest selection of premium dates. Fresh, natural, and packed with exceptional flavor.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>100% Natural</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Premium Quality</span>
                    </div>
                  </div>
                </div>
                <Link href="/products/dates" className="w-full block">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn" size="lg">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

