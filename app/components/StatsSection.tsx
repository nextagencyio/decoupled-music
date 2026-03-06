'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

const bubbleColors = [
  'bg-primary-100 border-primary-300 text-primary-700',
  'bg-accent-100 border-accent-300 text-accent-700',
  'bg-pink-100 border-pink-300 text-pink-700',
  'bg-blue-100 border-blue-300 text-blue-700',
  'bg-yellow-100 border-yellow-300 text-yellow-700',
  'bg-green-100 border-green-300 text-green-700',
]

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-16 left-1/2 w-64 h-64 bg-primary-50 rounded-full -translate-x-1/2 opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat: any, i: number) => {
            const colorClass = bubbleColors[i % bubbleColors.length]
            return (
              <div key={stat.id || i} className="flex flex-col items-center group">
                <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full border-4 ${colorClass} flex flex-col items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-md`}>
                  <div className="text-2xl md:text-3xl font-bold font-display">{stat.value || stat.number || stat.statValue}</div>
                </div>
                <span className="font-bold font-display text-gray-800 text-center text-sm md:text-base">{stat.label || stat.statLabel || stat.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
