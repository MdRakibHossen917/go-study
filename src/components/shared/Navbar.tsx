import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Brand name */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">goStudy</h1>
          </Link>

          {/* Middle - Navigation items and buttons */}
          <div className="flex items-center gap-6">
            <Link
              href="/subject"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Subject
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              How It Work
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              Inquery
            </Button>
            <Button variant="default" size="sm">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar