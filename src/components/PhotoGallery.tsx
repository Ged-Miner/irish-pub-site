"use client"

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  src: string
  alt: string
  title: string
}

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const closeModal = () => {
    setSelectedPhoto(null)
  }

  return (
    <section id="food" className="py-16 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-950 mb-8">
          Food Menu
        </h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md sm:max-w-2xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="absolute object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold drop-shadow-lg">{photo.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-slate-100 text-2xl bg-emerald-950/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-emerald-950/75 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
