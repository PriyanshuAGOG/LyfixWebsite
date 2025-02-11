import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Have questions? We're here to help. Reach out to us anytime.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-2xl">Contact Information</h3>
          <p>Email: info@brandlyft.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

