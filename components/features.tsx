import { Brain, PhoneCall, BarChart3, HeadphonesIcon } from "lucide-react"

const features = [
  {
    name: "AI Lead Generation Agent",
    description: "Identify high-quality leads effortlessly.",
    icon: Brain,
  },
  {
    name: "Cold Call AI Agent",
    description: "Engage leads through intelligent conversations.",
    icon: PhoneCall,
  },
  {
    name: "AI Manager",
    description: "Streamline operations and save time.",
    icon: BarChart3,
  },
  {
    name: "Customer Support AI Agent",
    description: "Deliver exceptional service 24/7.",
    icon: HeadphonesIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our AI-Powered Features</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how BrandLyft can revolutionize your real estate business with our cutting-edge AI agents.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8 transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

