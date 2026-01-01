import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study in United Kingdom - AbroadGuideBD",
  description: "Discover study abroad opportunities in the United Kingdom. Explore top universities and programs in UK.",
}

export default function UnitedKingdomPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 space-y-4">
          <div className="pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Study in United Kingdom
            </h1>
            <p className="text-muted-foreground text-lg mb-2">
              Experience world-renowned education in the UK
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded p-4 md:p-8">
          <div className="space-y-6">
            <p className="text-foreground">
              The United Kingdom is home to some of the world's most prestigious universities, 
              including Oxford and Cambridge. Study in a country with rich history, diverse culture, 
              and excellent academic reputation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Why Study in UK?</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• World-class universities</li>
                  <li>• Rich history and culture</li>
                  <li>• English language</li>
                  <li>• Global recognition</li>
                  <li>• Research opportunities</li>
                  <li>• Post-study work options</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Popular Programs</h2>
                <ul className="space-y-2 text-foreground">
                  <li>• Business & Management</li>
                  <li>• Engineering</li>
                  <li>• Medicine</li>
                  <li>• Law</li>
                  <li>• Arts & Humanities</li>
                  <li>• Science</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

