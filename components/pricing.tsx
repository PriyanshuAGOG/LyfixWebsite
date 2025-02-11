import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const saasPlans = [
  {
    name: "Basic",
    price: "$49",
    period: "/month",
    features: ["Limited features", "Basic credits", "Email support"],
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    features: ["All features", "Extra credits", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Personalized solutions", "Unlimited credits", "Dedicated account manager"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Flexible Pricing Plans</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">Choose the plan that best fits your business needs.</p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {saasPlans.map((plan) => (
          <div key={plan.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">{plan.name === "Enterprise" ? "Contact Us" : "Get Started"}</Button>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <h3 className="font-bold text-2xl mb-4">High-Ticket Clients</h3>
        <p className="text-muted-foreground mb-6">Starting at $5000 with $200-$500/month for maintenance.</p>
        <Button size="lg">Contact Us for a Custom Quote</Button>
      </div>
    </section>
  )
}

