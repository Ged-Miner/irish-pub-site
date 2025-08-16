import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header
        title="Scéal eile"
        subtitle="Traditional Pub | Ryogoku, Tokyo"
      />
      <Hero />
    </div>
  )
}
