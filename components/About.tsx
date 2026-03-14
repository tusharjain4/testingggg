import portfolioData from '@/data/portfolio.json'

export default function About() {
  const { about, experience, currentRole, highlights } = portfolioData

  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-zinc-600 leading-relaxed mb-6">{about}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-zinc-200">
                <p className="text-2xl font-bold text-zinc-900">{experience}</p>
                <p className="text-sm text-zinc-500">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-zinc-200">
                <p className="text-xl font-bold text-zinc-900">{currentRole}</p>
                <p className="text-sm text-zinc-500">Current Role</p>
              </div>
            </div>
          </div>

          {highlights && highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">
                Highlights
              </h3>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-zinc-600"
                  >
                    <span className="text-emerald-500 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}