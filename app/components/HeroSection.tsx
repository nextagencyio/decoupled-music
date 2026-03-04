'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-32 overflow-hidden">
      {/* Background hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80)' }}
      />

      {/* Floating decorative shapes */}
      <div className="absolute top-8 left-[10%] w-20 h-20 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} />
      <div className="absolute bottom-12 right-[8%] w-14 h-14 bg-lime-300 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
      <div className="absolute top-24 right-[25%] w-10 h-10 bg-pink-300 rounded-full opacity-35 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-[20%] w-16 h-16 bg-yellow-300 rounded-2xl opacity-25 rotate-12 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.8s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">{subtitle}</p>}
        {description && (
          <div className="text-lg text-primary-200 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a href="/music" className="px-8 py-4 bg-accent-400 text-primary-900 rounded-full font-bold hover:bg-accent-300 transition-all duration-200 shadow-lg shadow-accent-400/30 hover:-translate-y-1">
            Explore Releases
          </a>
          <a href="/tour" className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-200">
            Tour Dates
          </a>
        </div>
      </div>
    </section>
  )
}
