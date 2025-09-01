"use client"

import { useState } from 'react'

interface MenuItem {
  name: string
  description: string
  price1: string
  price2: string
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

interface MenuProps {
  categories: MenuCategory[]
}

export default function Menu({ categories }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="menu" className="py-16 px-4 bg-slate-100">
      <div className="max-w-4xl mx-auto mt-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Drink Menu
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === index
                  ? 'bg-emerald-600 text-slate-100 shadow-lg'
                  : 'bg-slate-200 text-emerald-950 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-slate-50 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold text-slate-600 mb-6 text-center">
            {categories[activeCategory].name}
          </h3>

          <div className="space-y-4">
            {categories[activeCategory].items.map((item, index) => (
              <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-700">{item.name}</h4>
                    <p className="text-slate-600 mt-1">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-end text-lg font-bold text-emerald-600 ml-4">
                    <span>
                      {item.price1}
                    </span>
                    <span>
                      {item.price2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
