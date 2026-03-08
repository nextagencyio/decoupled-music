import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_TOUR_DATES } from '@/lib/queries'
import { TourDatesData } from '@/lib/types'
import Header from '../components/Header'
import TourDateCard from '../components/TourDateCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Tour Dates | Harmony Hall',
  description: 'See upcoming Harmony Hall live shows and concerts. Get tickets for upcoming performances.',
}

async function getTourDates() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<TourDatesData>({
      query: GET_TOUR_DATES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeTourDates?.nodes || []
  } catch (error) {
    console.error('Error fetching tour dates:', error)
    return []
  }
}

export default async function TourDatesPage() {
  const items = await getTourDates()

  return (
    <div className="min-h-screen bg-violet-50">
      <Header />

      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-8 left-[12%] w-16 h-16 bg-accent-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-12 right-[10%] w-12 h-12 bg-lime-300 rounded-2xl opacity-30 rotate-45 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-20 right-[30%] w-8 h-8 bg-pink-300 rounded-full opacity-35 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Tour Dates</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">Upcoming live shows and concerts. Get your tickets today.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Tour Dates Yet</h2>
              <p className="text-gray-500">Tour Dates will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <TourDateCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
