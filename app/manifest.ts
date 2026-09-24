import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lyfix Technologies",
    short_name: "Lyfix",
    description: "Creative, technology, AI, growth, and operations agency.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080b",
    theme_color: "#ddff3e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  }
}
