import { Button } from "@/components/ui/button"

export default function BookDemo() {
  return (
    <section id="book-demo" className="container space-y-16 py-24 md:py-32 bg-primary/5 rounded-lg">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">See Our AI Agents in Action</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Schedule a personalized demo to explore how our AI agents can revolutionize your business.
        </p>
      </div>
      <div className="mx-auto max-w-lg">
        {/* Replace this with an actual scheduling form component */}
        <div className="bg-background p-8 rounded-lg shadow-lg">
          <h3 className="font-bold text-2xl mb-4">Book Your Demo</h3>
          <p className="mb-6 text-muted-foreground">Select a date and time that works best for you.</p>
          <Button size="lg" className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}

