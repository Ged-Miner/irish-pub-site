import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const pubFeatures = [
    {
      title: "Authentic Atmosphere",
      description: "Original 1923 fixtures, traditional Irish music, and the warmth of a genuine Dublin pub experience.",
      icon: "🍀"
    },
    {
      title: "Premium Drinks",
      description: "Perfectly poured Guinness, extensive whiskey selection, and craft cocktails made with Irish spirits.",
      icon: "🍺"
    },
    {
      title: "Traditional Food",
      description: "Hearty Irish classics made from locally sourced ingredients and family recipes passed down generations.",
      icon: "🍲"
    }
  ]

  return (
    <div className="min-h-screen">
      <Header
        title="Scéal eile"
        subtitle="Traditional Pub | Ryogoku, Tokyo"
      />
      <Hero />
      <About features={pubFeatures} />
      <Footer />
    </div>
  )
}
