import Link from 'next/link'
import { DrupalBio } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface BioCardProps {
  item: DrupalBio
}

const cardAccents = [
  { border: 'border-primary-200', shadow: 'shadow-primary-200/50', tag: 'text-primary-700 bg-primary-50' },
  { border: 'border-accent-200', shadow: 'shadow-accent-200/50', tag: 'text-accent-700 bg-accent-50' },
  { border: 'border-pink-200', shadow: 'shadow-pink-200/50', tag: 'text-pink-700 bg-pink-50' },
  { border: 'border-blue-200', shadow: 'shadow-blue-200/50', tag: 'text-blue-700 bg-blue-50' },
  { border: 'border-yellow-200', shadow: 'shadow-yellow-200/50', tag: 'text-yellow-700 bg-yellow-50' },
]

export default function BioCard({ item }: BioCardProps) {
  const accentIndex = (item.title?.charCodeAt(0) || 0) % cardAccents.length
  const accent = cardAccents[accentIndex]

  return (
    <Link
      href={item.path || '#'}
      className={`group bg-white rounded-3xl border-2 ${accent.border} shadow-lg ${accent.shadow} hover:-rotate-1 hover:scale-105 transition-all duration-300 overflow-hidden`}
    >
      <div className="relative h-48 bg-gradient-to-br from-primary-600 to-primary-800">
        {(item as any).photo?.url ? (
          <ResponsiveImage
            src={(item as any).photo.url}
            alt={(item as any).photo.alt || item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={(item as any).photo.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 text-white/30 text-4xl font-bold font-display">{item.title?.charAt(0)}</div>
          </div>
        )}
      </div>

      <div className="p-6">
          {(item as any).memberRole && (
            <p className={`text-sm font-bold mb-2 inline-block px-3 py-1 rounded-full ${accent.tag}`}>{(item as any).memberRole}</p>
          )}
        <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
          Read bio
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
