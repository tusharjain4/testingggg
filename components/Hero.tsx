import portfolioData from '@/data/portfolio.json'

export default function Hero() {
  const { name, role, tagline, heroImageUrl } = portfolioData

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {heroImageUrl && (
            <div className="flex-shrink-0">
              <img
                src={heroImageUrl}
                alt={name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-zinc-200 shadow-sm"
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-4">{role}</p>
            <p className="text-lg text-zinc-500 max-w-xl">{tagline}</p>
          </div>
        </div>
      </div>
    </section>
  )
}