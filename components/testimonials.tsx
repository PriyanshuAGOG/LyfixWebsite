const testimonials = [
  {
    quote:
      "BrandLyft's AI agents have revolutionized our lead generation process. We've seen a 300% increase in qualified leads!",
    author: "Jane Doe",
    company: "Real Estate Experts LLC",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The cold calling AI agent has transformed our outreach strategy. Our conversion rates have never been higher!",
    author: "John Smith",
    company: "Smith & Partners Realty",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "BrandLyft's AI Manager has streamlined our operations, saving us countless hours and improving our overall efficiency.",
    author: "Emily Johnson",
    company: "Johnson Real Estate Group",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What Our Clients Say</h2>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <p className="mb-4 text-muted-foreground">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                className="rounded-full w-12 h-12 mr-4"
              />
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

