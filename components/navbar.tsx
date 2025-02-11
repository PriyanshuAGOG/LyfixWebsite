import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">BrandLyft</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#products" className="transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="#blog" className="transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="#contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Book a Demo
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

