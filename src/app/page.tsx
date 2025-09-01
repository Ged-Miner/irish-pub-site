import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

export default function Home() {

  const menuData = [
    {
      name: "Beers and Ciders on Tap",
      items: [
        { name: "Guinness", description: "Ireland's most famous stout. Smooth, dark, and creamy, served with a shamrock drawn in the head.", price1: "Pint: ¥1200", price2: "1/2 Pint: 750" },
        { name: "O'Hara's 51st State IPA", description: "A bold Irish craft beer with bright tropical hops and a juicy, full-bodied kick.", price1: "Pint: ¥1300", price2: "1/2 Pint: 850" },
        { name: "Yebisu Amber Lager", description: "A Japanese red lager with mellow richness and caramel undertones.", price1: "Pint: ¥1150", price2: "Glass: 850" },
        { name: "Sapporo Black Label Lager", description: "A refreshing Japanese classic, a pale lager with a clean balance of malts and hops.", price1: "Pint: ¥1050", price2: "Mug (400ml): 800" },
        { name: "Magners Cider", description: "Ireland's oldest cider, crafted with fresh apples for a light and crisp taste.", price1: "Pint: ¥1200", price2: "1/2 Pint: 750" }
      ]
    },
    {
      name: "Whiskeys",
      items: [
        { name: "Irish Whiskeys", description: "Jameson, Bushmills, Tillamore Dew, Powers, Kilbeggan, The Dubliner, Proper No. Twelve, Redbreast, Connemarga, Green Spot, Paddy Centenary, Roe & Co, Glendalough, Nappogue, Teeling, Dingle", price1: "", price2: "" },
        { name: "Scotch Whiskeys", description: "Ballantine, Chivas Regal, The GLenlivet, Glenfiddich, Dewar's, The Macallan, Glenmorangie, Bowmore, Laphroaig, Ardbeg, Taliskerstorm, Caol, Octomore", price1: "", price2: "" },
        { name: "Japanese Whiskeys", description: "The Yamazaki, The Hakushu, Hibiki", price1: "", price2: "" },
        { name: "American Whiskeys", description: "I.W. Harper, Jack Daniel's, Maker's Mark, WIld Turkey, Branton's", price1: "", price2: "" }
      ]
    },
    {
      name: "Cocktails, Wines, & Soft Drinks",
      items: [
        { name: "Gin", description: "Gin & Tonic, ...", price1: "", price2: "" },
        { name: "Vodka", description: "list of the vodka drinks", price1: "", price2: "" },
        { name: "Rum", description: "list of the rum drinks", price1: "", price2: "" },
        { name: "Tequila", description: "list of the tequila drinks", price1: "", price2: "" },
        { name: "Others", description: "list of the soft drinks etc.", price1: "", price2: "" }
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
      <About />
      <Footer />
    </div>
  )
}
