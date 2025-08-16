"use client"

import { useState } from "react"

export default function Hero() {

  const [hasClickedMenu, setHasClickedMenu] = useState(false)

  const handleMenuClick = () => {
    setHasClickedMenu(true)
    alert("Menu coming soon!")
  }

  return (
    <section className="bg-emerald-950 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-6">
          Your Local Pub in Ryogoku
        </h2>
        <p className="text-lg md:text-xl text-slate-50 mb-8 max-w-2xl mx-auto">
          Hello! We are Yuki & Taka. Feel at home in our family-owned Irish pub,
          where great pints, warm smiles, and good craic await!
        </p>
        <button
          onClick={handleMenuClick}
          className={`${
            hasClickedMenu
            ? 'bg-gray-400 cursor-not-allowed'
            : 'cursor-pointer bg-emerald-600 hover:bg-emerald-700'
           } text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200`} disabled={hasClickedMenu}
        >
          {hasClickedMenu ? 'Thanks for your interest!' : 'View our menu'}
        </button>
      </div>
    </section>
  )
}
