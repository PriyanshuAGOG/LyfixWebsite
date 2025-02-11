import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Lead Generation Agent",
    description: "Automate your lead generation process with AI.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://products.leadgenai.brandlyft.com",
  },
  {
    name: "Cold Calling Agent",
    description: "Engage potential clients with intelligent AI conversations.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://products.coldcallingai.brandlyft.com",
  },
  {
    name: "Customer Support Agent",
    description: "Provide 24/7 customer support with AI assistance.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://products.customersupportai.brandlyft.com",
  },
  {
    name: "AI Manager",
    description: "Streamline your operations with AI-powered management.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://products.aimanager.brandlyft.com",
  },
]

export default function Products() {
  return (
    <section id="products" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Explore Our AI-Powered Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover our SaaS offerings tailored to meet your business needs.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="mb-4 rounded-lg" />
            <h3 className="font-bold text-xl mb-2">{product.name}</h3>
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <Button asChild>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

