'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Get in Touch'
  const description = (homepageContent as any)?.ctaDescription?.processed || ''
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Contact Us'
  const secondaryLabel = (homepageContent as any)?.ctaSecondary || 'Learn More'

  return (
    <section className="bg-accent-400 py-20 relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute top-6 left-[8%] w-16 h-16 bg-accent-300 rounded-full opacity-50" />
      <div className="absolute bottom-8 right-[12%] w-12 h-12 bg-primary-300 rounded-2xl opacity-40 rotate-12" />
      <div className="absolute top-12 right-[30%] w-10 h-10 bg-yellow-300 rounded-full opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-900 mb-4">{title}</h2>
        {description && (
          <div className="text-primary-800 mb-8 max-w-2xl mx-auto text-lg" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-4 bg-primary-700 text-white rounded-full hover:bg-primary-600 transition-all duration-200 font-bold shadow-lg shadow-primary-400/30 hover:-translate-y-1">
            {primaryLabel}
          </a>
          <a href="/about" className="px-8 py-4 border-2 border-primary-900 text-primary-900 rounded-full hover:bg-primary-900 hover:text-white transition-all duration-200 font-bold">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
