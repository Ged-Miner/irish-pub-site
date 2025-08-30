import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import PhotoGallery from "@/components/PhotoGallery";
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

  const menuData = [
    {
      name: "Beers and Ciders on Tap",
      items: [
        { name: "Guinness", description: "description of the beer", price1: "Pint: ¥1200", price2: "1/2 Pint: 750" },
        { name: "O'Hara's 51st State IPA", description: "description of the beer", price1: "Pint: ¥1300", price2: "1/2 Pint: 850" },
        { name: "Yebisu Amber Lager", description: "description of the beer", price1: "Pint: ¥1150", price2: "Glass: 850" },
        { name: "Sapporo Black Label Lager", description: "description of the beer", price1: "Pint: ¥1050", price2: "Mug (400ml): 800" },
        { name: "Magners Cider", description: "description of the cider", price1: "Pint: ¥1200", price2: "1/2 Pint: 750" }
      ]
    },
    {
      name: "Whiskeys",
      items: [
        { name: "Irish Whiskeys", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "Scotch Whiskeys", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "Japanese Whiskeys", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "American Whiskeys", description: "list of the whiskeys", price1: "", price2: "" }
      ]
    },
    {
      name: "Cocktails, Wines, and Soft Drinks",
      items: [
        { name: "Gin", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "Vodka", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "Rum", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "Tequila", description: "list of the whiskeys", price1: "", price2: "" },
        { name: "Others", description: "list of the whiskeys", price1: "", price2: "" }
      ]
    }
  ]

  const galleryPhotos = [
    { src: "/fishandchips.jpg", alt: "fish and chips", title: "Fish and Chips" },
    { src: "/beefguinessstew.jpg", alt: "beef guinness stew", title: "Beef Guinness Stew" },
    { src: "/bangersandmash.jpg", alt: "bangers and mash", title: "Bangers and Mash" },
    { src: "/shepherdspie.jpg", alt: "shepherd's pie", title: "Shepherd's Pie" }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu categories={menuData} />
      <PhotoGallery photos={galleryPhotos} />
      <About features={pubFeatures} />
      <Footer />
    </div>
  )
}
