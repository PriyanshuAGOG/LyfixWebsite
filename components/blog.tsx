import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "5 Ways AI is Transforming Real Estate",
    description: "Discover how artificial intelligence is revolutionizing the real estate industry.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Maximizing Lead Generation with AI Agents",
    description: "Learn how to leverage AI agents to boost your lead generation efforts.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Future of Customer Support in Real Estate",
    description: "Explore how AI-powered customer support is changing the game for real estate professionals.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Learn with BrandLyft</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Stay up-to-date with the latest trends and insights in AI and real estate.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="mb-4 rounded-lg" />
            <h3 className="font-bold text-xl mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <Button variant="outline">Read More</Button>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button size="lg">View All Posts</Button>
      </div>
    </section>
  )
}

