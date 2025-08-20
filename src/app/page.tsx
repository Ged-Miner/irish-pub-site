import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/menu";
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
      name: "Appetizers",
      items: [
        { name: "Irish Potato Skins", description: "Crispy potato skins with bacon, cheese, and chives", price: "€8.50" },
        { name: "Guinness Cheese Dip", description: "Warm cheese dip infused with Guinness, served with soda bread", price: "€7.00" },
        { name: "Smoked Salmon Boxty", description: "Traditional potato pancake topped with smoked salmon and crème fraîche", price: "€12.00" }
      ]
    },
    {
      name: "Mains",
      items: [
        { name: "Fish & Chips", description: "Beer-battered cod with hand-cut chips and mushy peas", price: "€16.50" },
        { name: "Irish Stew", description: "Tender lamb with potatoes, carrots, and fresh herbs", price: "€18.00" },
        { name: "Bangers & Mash", description: "Traditional Irish sausages with colcannon and onion gravy", price: "€15.00" }
      ]
    },
    {
      name: "Drinks",
      items: [
        { name: "Guinness Pint", description: "The perfect pint, poured the traditional way", price: "€5.50" },
        { name: "Irish Coffee", description: "Hot coffee with Irish whiskey, sugar, and cream", price: "€7.00" },
        { name: "Whiskey Flight", description: "Sample three premium Irish whiskeys", price: "€18.00" }
      ]
    }
  ]

  const galleryPhotos = [
    { src: "https://images.unsplash.com/photo-1485686531765-ba63b07845a7", alt: "Cozy pub interior", title: "Our Warm Interior" },
    { src: "https://images.unsplash.com/photo-1546622891-02c72c1537b6", alt: "Bar with taps", title: "Premium Bar Selection" },
    { src: "https://images.unsplash.com/photo-1645453014403-4ad5170a386c", alt: "Traditional Irish food", title: "Hearty Irish Cuisine" },
    { src: "https://images.unsplash.com/photo-1671368913134-c211bc02487f", alt: "Customers watching soccer", title: "Live Soccer Games" },
    { src: "https://images.unsplash.com/photo-1632293416349-4a3ff46e3572", alt: "Guinness being poured", title: "Perfect Pint Every Time" },
    { src: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521", alt: "Friends enjoying drinks", title: "Great Company" }
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
