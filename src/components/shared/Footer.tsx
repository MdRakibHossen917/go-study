"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Linkedin, Github, Twitter } from "lucide-react"

const Footer = () => {
  const [consentChecked, setConsentChecked] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log("Newsletter subscription submitted")
  }

  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Brand and Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                AbroadGuideBD
              </h2>
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              STUDY ABROAD FOR EVERYONE
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're here to make studying abroad achievable, and we're building a community of open-minded, connected, and culturally aware people ready to make a real impact in our ever-connected world.
            </p>

            {/* Contact Us and Get Started Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Us Section */}
              <div className="space-y-3 relative">
                <h3 className="text-lg font-bold text-foreground">CONTACT US</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">+8801300981501</p>
                  <p className="text-muted-foreground">info@studyabroad.com</p>
                </div>
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-border"></div>
              </div>

              {/* Get Started Section */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">GET STARTED</h3>
                <div className="flex flex-col space-y-2">
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/inquiry" className="text-muted-foreground hover:text-primary transition-colors">
                    Inquire Now
                  </Link>
                  <Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Connect With Section */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">CONNECT WITH</h3>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <div className="w-px h-5 bg-border"></div>
                <Link 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <div className="w-px h-5 bg-border"></div>
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <div className="w-px h-5 bg-border"></div>
                <Link 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Newsletter Subscription */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-muted-foreground">
                Stay up to date with the latest study abroad programs, news and promotions! No spam, just good content.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="newsletterFirstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="newsletterFirstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="newsletterLastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="newsletterLastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="newsletterEmail" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="newsletterEmail"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="newsletterConsent" 
                  checked={consentChecked}
                  onCheckedChange={setConsentChecked}
                />
                <label htmlFor="newsletterConsent" className="text-sm text-foreground leading-relaxed cursor-pointer">
                  <span className="text-destructive">*</span> By checking this box, I consent to StudyAbroad.com collecting and storing my data through the submission of this form, sending marketing communications, and I agree to the StudyAbroad.com Privacy Policy.
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 abroadguidebd.com. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
